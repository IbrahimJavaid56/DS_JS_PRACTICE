//Calculator Task
// function calculation(callBack, x, y) {
//     return callBack(x, y);
// }

// function divide(x, y) {
//     return x / y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// function add(x, y) {
//     return x + y;
// }

// function sub(x, y) {
//     return x - y;
// }

// console.log(calculation(add,20,15));
// console.log(calculation(sub,20,15));
// console.log(calculation(multiply,20,15));
// console.log(calculation(divide,20,15));

function calculation(callBack, x, y) {
    return callBack(x, y);
}

function divide(x, y) {
    return x / y;
}

function multiply(x, y) {
    return x * y;
}

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function MenuChoice() {
    console.log("1. Divide");
    console.log("2. Multiply");
    console.log("3. Add");
    console.log("4. Subtract");
    const choice = parseInt(prompt("Enter the operation number:"));
    return choice;
}

let caseValue = MenuChoice(); // You need to call the function here to get the choice
let operation;

switch (caseValue) {
    case 1:
        operation = divide;
        break;
    case 2:
        operation = multiply;
        break;
    case 3:
        operation = add;
        break;
    case 4:
        operation = sub;
        break;
    default:
        console.log("Invalid choice");
        break;
}
if (operation) {
    const result = calculation(operation, 10, 5);
    console.log("Result:", result);
}
