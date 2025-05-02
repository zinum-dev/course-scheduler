class Subject {
    constructor(code, name, credits, theoreticalHours, practicalHours, extensionHours, period, prerequisites = [], dependents = []) {
        this.code = code;
        this.name = name;
        this.credits = credits;
        this.theoreticalHours = theoreticalHours;
        this.practicalHours = practicalHours;
        this.extensionHours = extensionHours;
        this.period = period;
        this.prerequisites = prerequisites; // Lista de códigos das matérias que são pré-requisitos
        this.dependents = dependents; // Lista de códigos das matérias que dependem desta
    }

    arePrerequisitesMet(completedSubjects) {
        return this.prerequisites.every(prerequisite => completedSubjects.includes(prerequisite));
    }

    addDependent(dependentCode) {
        if (!this.dependents.includes(dependentCode)) {
            this.dependents.push(dependentCode);
        }
    }
}

export default Subject; // Exportação para ESM