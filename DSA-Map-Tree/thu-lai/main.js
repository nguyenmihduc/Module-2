var nameMap = new Map();
nameMap.set("Anand", 1001);
nameMap.set("Bhargavi", 1002);
nameMap.set("Chrestin", 1003);
nameMap.set("Daniel", 1004);
nameMap.set("Esther", 1005);
console.log(nameMap.size);
console.log(nameMap.get("Chrestin"));
console.log(nameMap.get("Esther"));
//Iterating map keys
for (var _i = 0, _a = nameMap.keys(); _i < _a.length; _i++) {
    var item = _a[_i];
    console.log("Names: " + item);
}
//Iterating map values
for (var _b = 0, _c = nameMap.values(); _b < _c.length; _b++) {
    var item = _c[_b];
    console.log("ID: ", item);
}
//Iterating map entries
for (var _d = 0, _e = nameMap.entries(); _d < _e.length; _d++) {
    var item = _e[_d];
    console.log("entries: ", item[0], item[1]);
}
//Destructuring on object entries
for (var _f = 0, nameMap_1 = nameMap; _f < nameMap_1.length; _f++) {
    var _g = nameMap_1[_f], key = _g[0], value = _g[1];
    console.log("key value pairs: ", key, value);
}
// item Daniel will get deleted, will return 'true' as output
nameMap["delete"]("Daniel");
// Clear all the entries of the map
nameMap.clear();
console.log(nameMap.size);
