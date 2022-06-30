const argument = process.argv.slice(2) //removing the first two Directories
//console.log(argument)
let operation = argument[0]
let operands = process.argv.slice(3)
function isNumber(value) {
    for (let index = 0; index < value.length; index++) {
        if (isNaN(value[index]) == false) {
            continue
        }
        else {
            return false
        }
    }
    return true
}
function add(values) {
    let k = isNumber(values)
    if (k == true) {
        let sum = 0
        for (let index = 0; index < values.length; index++) {
            sum += parseInt(values[index]);

        }
        return sum
    }
    else {
        console.log("Not a Number")
    }

}
function multiply(values) {
    let k = isNumber(values)
    if (k == true) {
        let mul = values[0]
        for (let index = 1; index < values.length; index++) {
            mul *= parseInt(values[index]);

        }
        return mul
    }
    else {
        console.log("Not a Number")
    }


}
function subtraction(values) {
    let k = isNumber(values)
    if (k == true) {
        let sub = values[0];
        if (values.length > 2) {
            console.log("subtraction takes only two input values")
        }
        else {
            for (let index = 1; index < values.length; index++) {
                sub -= parseInt(values[index]);

            }
            return sub
        }
    }
    else {
        console.log("Not a Number")
    }

}
function Divide(values) {
    let k = isNumber(values)
    if (k == true) {
        let division = values[0];
        if (values.length > 2) {
            console.log("Division takes only two input values")
        }

        else if (values.findIndex(a => a == 0) != -1) {
            console.log("Division by 0 not possible")
        }
        else {
            for (let index = 1; index < values.length; index++) {
                division /= parseInt(values[index]);
            }
            return division
        }
    }
    else {
        console.log("Not a Number")
    }
}

const ALLOWED_OPERATIONS = {
    ADDITION: "addition",
    multiply: "multiply",
    subtraction: "subtraction",
    DIVISION: "division"
}
// let allowedOperations = ["addition", "subtraction", "multiply", "division"];
if (!Object.values(ALLOWED_OPERATIONS).includes(operation)) {
    throw Error("Invalid Operations")
}
switch (operation) {
    case ALLOWED_OPERATIONS.ADDITION:
        const ResultOfAddition = add(operands);
        if (ResultOfAddition != undefined)
            console.log(`Addtion of ${operands} is:${ResultOfAddition}`)
        break;
    case ALLOWED_OPERATIONS.multiply:
        const ResultOfmultiply = multiply(operands);
        if (ResultOfmultiply != undefined)
            console.log(`multiply of ${operands} is:${ResultOfmultiply}`)
        break;
    case ALLOWED_OPERATIONS.subtraction:
        const ResultOfsubtraction = subtraction(operands)
        if (ResultOfsubtraction != undefined)
            console.log(`subtraction of ${operands} is:${ResultOfsubtraction}`)
        break;
    case ALLOWED_OPERATIONS.DIVISION:
        const ResultOfDivision = Divide(operands)
        if (ResultOfDivision != undefined)
            console.log(`Division of ${operands} is:${ResultOfDivision}`)
        break;


}