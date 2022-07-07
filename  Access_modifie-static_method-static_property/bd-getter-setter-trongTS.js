var User = {
    name: "John",
    surname: "Smith",
    getName: function () {
        return this.name;
    },
    setName: function (value) {
        this.name = value;
    }
};
console.log(User.getName());
