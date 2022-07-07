class Person {
    protected name: string;
    protected age: number;
    interests: string;

    constructor(name: string, age: number, interests: string = "hoc code") {
        this.name = name;
        this.age = age;
        this.interests = interests;
    }
    getInfo() {
        return console.log(`${this.name}  ${this.age}  ${this.interests}`)
    }
    static helloWorld() {
        console.log('Hi there');
    }
    static canTeach(person) {
        return console.log(person.interests === 'hoc code');
    }
}

let person1 = new Person('duc', 35, "the thao")
let person2 = new Person('tuan', 33, )

person1.getInfo()
person2.getInfo()

Person.canTeach(person1)
Person.canTeach(person2)
