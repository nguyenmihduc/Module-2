class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    getName() {
        return this._name;
    }
    getAge() {
        return this._age
    }

    setName(value: string) {
        this._name = value;
    }

    setAge(value: number) {
        this._age = value;
    }
}

class Teacher extends Person {
    private _specialized: string

    constructor(name: string, age: number, specialized: string) {
        super(name, age);
        this._specialized = specialized;
    }

    getSpecialized(): string {
        return this._specialized;
    }

    setSpecialized(value: string) {
        this._specialized = value;
    }
}

let teacher1 = new Teacher('minh', 35, 'Toan');
teacher1.setAge(36)
teacher1.setSpecialized("Toan, Ly")

console.log(teacher1)