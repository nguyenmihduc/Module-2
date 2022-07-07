class Person {
    static Ten: string = "minh duc";
    static BietDanh: string;

    static {
        this.BietDanh = "Duc Nguyen"
    }
}
console.log(Person.Ten)
console.log(Person.BietDanh)