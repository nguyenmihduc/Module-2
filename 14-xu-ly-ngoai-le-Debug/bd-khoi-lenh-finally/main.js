function inverse(x) {
    if (!x) {
        throw new Error('Division by zero.');
    }
    return 1 / x;
}
try {
    console.log(inverse(5));
}
catch (e) {
    console.log(`Caught exception: ${e.message}`);
}
finally {
    console.log('First finally');
}
try {
    console.log(inverse(0));
}
catch (e) {
    console.log(`Caught exception: ${e.message}`);
}
finally {
    console.log('Second finally');
}
console.log('Hello World');
//# sourceMappingURL=main.js.map