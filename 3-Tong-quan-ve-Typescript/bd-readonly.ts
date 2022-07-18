interface SomeType {
    readonly prop: string;
}
function doSomething(obj: SomeType) {
    // Chúng ta có thể đọc giá trị từ thuộc tính 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
    // Nhưng chúng ta không thể gán lại giá trị.
    // obj.prop = "hello";
}
interface Person {
    name: string;
    age: number;
}
interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}
let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};
// Dòng bên dưới là đúng cú pháp
let readonlyPerson: ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age); // in ra màn hình '42'
writablePerson.age++;
console.log(readonlyPerson.age); // in ra màn hình '43'