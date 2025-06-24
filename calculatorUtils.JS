// This function adds two numbers and returns the result as a string
function add(x, y) {
    return `${x} + ${y} = ${x + y}`;
}

// This function subtracts y from x and returns the result as a string
function subtract(x, y) {
    return `${x} - ${y} = ${x - y}`;
}

// This function multiplies two numbers and returns the result as a string
function multiply(x, y) {
    return `${x} * ${y} = ${x * y}`;
}

// This function divides x by y and returns the result as a string
function divide(x, y) {
    return `${x} / ${y} = ${x / y}`;
}

// Testing the functions and printing the results to the console
console.log(add(5, 5));         // Output: 5 + 5 = 10
console.log(subtract(10, 11));  // Output: 10 - 11 = -1
console.log(multiply(5, 5));    // Output: 5 * 5 = 25
console.log(divide(5, 9));      // Output: 5 / 9 = 0.555...
