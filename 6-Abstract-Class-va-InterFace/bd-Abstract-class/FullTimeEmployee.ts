import {Employee} from './Employee'

export class FullTimeEmployee extends Employee {
    private salary: number;
    constructor(firstName: string, lastName: string, salary: number) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary(): number {
        return this.salary;
    }
}