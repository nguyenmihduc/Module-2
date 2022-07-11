
import {Employee} from "./Employee";

export class Contractor extends Employee {
    private rate: number;
    private hours: number;

    constructor(firstName: string, lastName: string, rate: number, hours: number) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}