let num = 5;
let deNum = 0;
try {
    if (deNum == 0) {
        throw "Divide by zero error";
    }
    else {
        let sol = num / deNum;
        console.log(sol);
    }
}
catch (e) {
    console.log("error:" + e);
}
//# sourceMappingURL=main.js.map