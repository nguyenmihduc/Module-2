"use strict";
exports.__esModule = true;
exports.User = void 0;
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["user"] = 2] = "user";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        return console.log("".concat(this.name, " ").concat(this.email, " ").concat(this.role));
    };
    User.isAdmin = function (user) {
        if (user.role === 1) {
            console.log(user.name + 'là Adimin');
        }
        else if (user.role === 2) {
            console.log(user.name + 'là người dùng bình thường');
        }
    };
    User.prototype.setName = function (value) {
        this.name = value;
    };
    User.prototype.setEmail = function (value) {
        this.email = value;
    };
    User.prototype.setRole = function (value) {
        this.role = value;
    };
    return User;
}());
exports.User = User;
