class Person {
    private ssn: string;
    protected firstName: string;
    protected lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('153-07-3130', 'John', 'Doe');

class User extends Person {
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}