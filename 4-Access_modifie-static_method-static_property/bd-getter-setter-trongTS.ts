const User = {
    name: "John",
    surname: "Smith",
    getName() {
        return this.name
    },
    setName(value) {
        this.name = value
    }
}
console.log(User.getName())