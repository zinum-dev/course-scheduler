export function areAllPrerequisitesMet(subject, completedSubjects) {
    return subject.prerequisites.every(prerequisite => completedSubjects.includes(prerequisite.name));
}

export function getDependentSubjects(subject, allSubjects) {
    return allSubjects.filter(s => s.prerequisites.includes(subject.code));
}