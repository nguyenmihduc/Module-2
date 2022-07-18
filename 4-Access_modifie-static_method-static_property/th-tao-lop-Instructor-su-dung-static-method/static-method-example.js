class Instructor {
    constructor({ name, role = "assistant" } = {}) {
        this.role = role;
        this.name = name;
    }
    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }
    static helloWorld() {
        console.log('Hi there');
    }
    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }
}
let juniorInstructor = new Instructor({ 'name' : 'Brian' });
let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });

juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"

Instructor.helloWorld()
console.log(Instructor.canTeach(juniorInstructor))
console.log(Instructor.canTeach(seniorInstructor))