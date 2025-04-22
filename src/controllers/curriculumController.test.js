const curriculumController = require('./curriculumController');
const mockSubjectsArrayInstances = require('../mock/mockData');
const { populateDependentsFromPrerequisites, convertToMap } = require('../services/dependencyService');

test('hello world!', () => {
	expect(1 + 1).toBe(2);
});

jest.mock('../mock/mockData', () => [
	{ id: 'subject1', prerequisites: [] },
	{ id: 'subject2', prerequisites: ['subject1'] },
]);

jest.mock('../services/dependencyService', () => ({
	populateDependentsFromPrerequisites: jest.fn(),
	convertToMap: jest.fn(),
}));

describe('curriculumController.getSubjects', () => {
	let mockRes;

	beforeEach(() => {
		mockRes = {
			json: jest.fn(),
			status: jest.fn().mockReturnThis(),
		};
	});

	it('should return a JSON response with the map of subjects and their dependents', () => {
		const mockMap = new Map([
			['subject1', { id: 'subject1', dependents: ['subject2'] }],
			['subject2', { id: 'subject2', dependents: [] }],
		]);

		convertToMap.mockReturnValue(mockMap);
		populateDependentsFromPrerequisites.mockReturnValue(mockMap);

		curriculumController.getSubjects({}, mockRes);

		expect(convertToMap).toHaveBeenCalledWith(mockSubjectsArrayInstances);
		expect(populateDependentsFromPrerequisites).toHaveBeenCalledWith(mockMap);
		expect(mockRes.json).toHaveBeenCalledWith(Object.fromEntries(mockMap));
	});

	it('should return a 500 status code and error message on failure', () => {
		const mockError = new Error('Something went wrong');
		populateDependentsFromPrerequisites.mockImplementation(() => {
			throw mockError;
		});

		curriculumController.getSubjects({}, mockRes);

		expect(mockRes.status).toHaveBeenCalledWith(500);
		expect(mockRes.json).toHaveBeenCalledWith({ error: mockError.message });
	});
});
