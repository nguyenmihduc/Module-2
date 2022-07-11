export abstract class Employee {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    abstract getSalary(): number;
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    compensationStatement(): string {
        return `${this.getFullName()} make ${this.getSalary()} a month`;
    }
}
