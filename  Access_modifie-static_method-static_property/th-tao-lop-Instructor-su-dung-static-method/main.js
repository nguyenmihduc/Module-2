var Person = /** @class */ (function () {
    function Person(name, age, interests) {
        if (interests === void 0) { interests = "hoc code"; }
        this.name = name;
        this.age = age;
        this.interests = interests;
    }
    Person.prototype.getInfo = function () {
        return console.log("".concat(this.name, "  ").concat(this.age, "  ").concat(this.interests));
    };
    Person.helloWorld = function () {
        console.log('Hi there');
    };
    Person.canTeach = function (person) {
        return console.log(person.interests === 'hoc code');
    };
    return Person;
}());
var person1 = new Person('duc', 35, "the thao");
var person2 = new Person('tuan', 33);
person1.getInfo();
person2.getInfo();
Person.canTeach(person1);
Person.canTeach(person2);
