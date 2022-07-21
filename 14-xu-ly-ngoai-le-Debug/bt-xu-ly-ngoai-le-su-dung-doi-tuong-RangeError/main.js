function checkOperator(operator) {
    if (!['+', '-', '*', '/'].includes(operator)) {
        return false;
    }
}
function calculator(number1, number2, operator) {
    let result;
    if (!checkOperator(operator)) {
        throw new RangeError('the operator must be an +,-,*,/');
    }
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else if (operator == '/') {
        result = number1 / number2;
    }
    return result;
}
try {
    calculator(3, 9, '%');
}
catch (e) {
    if (e instanceof RangeError) {
        console.log(e.message);
    }
}
//# sourceMappingURL=main.js.map