interface OS {
    name: string;
    language: string;
}
// function OperatingSystem (type: OS) {
//     return console.log(`Android ${type.name} has ${type.language} language`)
// }
 let OperatingSystem = (type: OS) => {
     console.log(`Android ${type.name} has ${type.language} language`)
 }
let Oreo = {name: 'o', language: 'java'}

OperatingSystem(Oreo)