
class Staff {
    name: string;
    email: string;
    age: number;
    constructor(name: string, email: string, age: number ) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(_name: string) {
        this.name = _name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(_email: string) {
        this.email = _email;
    }
    getAge() {
        return this.age
    }
    setAge(_age: number) {
        this.age = _age;
    }
}
let staff = new Staff("minh duc", "minhduc@gmail.com", 35)
console.log(staff.getName())

staff.setName("nguyen minh duc")

console.log(staff.getName())