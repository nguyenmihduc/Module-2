function greeks() {
    console.log("for (;;)")
    for ( let i = 0; i <=10; i +=2) {
        console.log(i + " ")
    }
}
greeks();

console.log("for...of")
for (let i of ['ha noi', 20.32, 3000]) {
    console.log(i + "")
}

let obj = {
    name: 'Peter',
    age: 35,
    salary: 3000
}
for (let j in obj) {
    console.log(obj[j] + "")
}