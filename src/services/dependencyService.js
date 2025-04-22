export function populateDependentsFromPrerequisites(subjectMap) {
    
    // Popular dependentes usando o Map
    subjectMap.forEach(subject => {
        if (subject.prerequisites && subject.prerequisites.length > 0) {
            subject.prerequisites.forEach(prerequisiteCode => {
                const prerequisiteSubject = subjectMap.get(prerequisiteCode);
                if (prerequisiteSubject) {
                    prerequisiteSubject.addDependent(subject.code);
                }
            });
        }
    });
    return subjectMap;
}

/**
 * Converts an array of subjects into a Map where the keys are subject codes
 * and the values are the corresponding subject objects.
 *
 * @param {Array<Object>} subjectsArray - An array of subject objects.
 * @param {string} subjectsArray[].code - The unique code of the subject.
 * @returns {Map<string, Object>} A Map with subject codes as keys and subject objects as values.
 */
export function convertToMap(subjectsArray) {
    // Converter o array de matérias para um Map
    const subjectsMap = new Map();
    subjectsArray.forEach(subject => {
        const { code } = subject;
        subjectsMap.set(code, subject);
    });
    return subjectsMap;
    
}