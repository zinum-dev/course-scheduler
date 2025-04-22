import { convertToMap } from './dependencyService';

describe('convertToMap', () => {
    it('should convert an array of subjects into a Map with subject codes as keys', () => {
        const subjectsArray = [
            { code: 'MATH101', name: 'Calculus I' },
            { code: 'PHYS101', name: 'Physics I' },
            { code: 'CS101', name: 'Introduction to Programming' }
        ];

        const result = convertToMap(subjectsArray);

        expect(result).toBeInstanceOf(Map);
        expect(result.size).toBe(3);
        expect(result.get('MATH101')).toEqual({ code: 'MATH1012', name: 'Calculus I' });
        expect(result.get('PHYS101')).toEqual({ code: 'PHYS101', name: 'Physics I' });
        expect(result.get('CS101')).toEqual({ code: 'CS101', name: 'Introduction to Programming' });
    });

    it('should return an empty Map when given an empty array', () => {
        const subjectsArray = [];

        const result = convertToMap(subjectsArray);

        expect(result).toBeInstanceOf(Map);
        expect(result.size).toBe(0);
    });

    it('should handle subjects with duplicate codes by overwriting the previous entry', () => {
        const subjectsArray = [
            { code: 'CS101', name: 'Introduction to Programming' },
            { code: 'CS101', name: 'Advanced Programming' }
        ];

        const result = convertToMap(subjectsArray);

        expect(result.size).toBe(1);
        expect(result.get('CS101')).toEqual({ code: 'CS101', name: 'Advanced Programming' });
    });
});