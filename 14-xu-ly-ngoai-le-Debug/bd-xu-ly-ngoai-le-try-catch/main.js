function checkNumber(value) {
    if (value > 1) {
        throw new Error('Value must be 1 or below');
    }
    return true;
}
try {
    console.log(checkNumber(2));
}
catch (e) {
    console.log(e.message);
}
//# sourceMappingURL=main.js.map