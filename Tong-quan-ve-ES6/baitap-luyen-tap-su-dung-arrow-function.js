
const inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
]
let valueOfinventory = inventory.map(values => {
    return values.value;
})


console.log(valueOfinventory)
let totalMachineValue = valueOfinventory.reduce((a,b) => {
    return a + b;
})
// for (let i = 0; i < valueOfinventory.length; i++) {
//     totalMachineValue += valueOfinventory[i]
// }
console.log(totalMachineValue)
