var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setName = function (_name) {
        this.name = _name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setEmail = function (_email) {
        this.email = _email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setAge = function (_age) {
        this.age = _age;
    };
    return Staff;
}());
var staff = new Staff("minh duc", "minhduc@gmail.com", 35);
console.log(staff.getName());
staff.setName("nguyen minh duc");
console.log(staff.getName());
