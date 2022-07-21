
function checkOperator(operator: any) {
    if (!['+', '-', '*', '/'].includes(operator)) {
        return false
    }
}
function calculator(number1: number, number2: number, operator: any) {
    let result;
    if (!checkOperator(operator)) {
        throw new RangeError('the operator must be an +,-,*,/')
    }
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    }
    return result;
}

try {
    calculator(3,9,'%')
} catch (e) {
    if (e instanceof RangeError) {
        console.log(e.message)
    }
}