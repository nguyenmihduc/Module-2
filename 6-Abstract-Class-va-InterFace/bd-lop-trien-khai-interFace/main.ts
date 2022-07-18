interface Person {
    firstName: string;
    lastName: string;
    age: number;
    FullName();
    getAge();
}

class Employee implements Person {
    firstName: string;
    lastName: string;
    age: number;
    FullName(): string {
        return this.firstName + this.lastName
    };
    getAge(): number {
        return this.age
    };

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

let employee1 = new Employee('minh duc', 'nguyen', 35)
let fullName = employee1.FullName()
let age = employee1.getAge()
console.table(employee1)
console.log(fullName + age)