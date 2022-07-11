// function OperatingSystem (type: OS) {
//     return console.log(`Android ${type.name} has ${type.language} language`)
// }
var OperatingSystem = function (type) {
    console.log("Android ".concat(type.name, " has ").concat(type.language, " language"));
};
var Oreo = { name: 'o', language: 'java' };
OperatingSystem(Oreo);
