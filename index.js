function add(a, b) {
    return a + b;   
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) return 'Can\'t divide by zero!';
    return Math.round(a / b * 1000) / 1000;
}

function operate(a, operator, b) {
    switch (operator) {
        case "+":   return add(a, b);
        case "-":   return subtract(a, b);
        case "*":   return multiply(a,b);
        case "/":   return divide(a,b); 
    }
}

function isNumber(input) {
    const nums = [1,2,3,4,5,6,7,8,9]
    return nums.includes(parseInt(input));
}

function isOperator(input) {
    const operators = ["+","-","*","/"]
    return operators.includes(input);
}

// add click event listener to buttons
const buttons = document.querySelector('.display');
let firstNum = null;
let operator = null;
let secondNum = null;


buttons.addEventListener("click", function(button){
    // Proceeds only if a button has been clicked
    const isButton = (button.target.className == 'box');
    if (!isButton) return;
    
    // Runs different cases based on whether a number, operator or clear is clicked
    let input = button.target.textContent;
    console.log(input + ' ' + isNumber(input) + ' ' + isOperator(input));
    switch(button.target.textContent) {
        case isNumber(input):
            // ...;
        case isOperator(input):
            // ...'
        case (input == 'C'):
            // ...'
    }
})



// event listener - when a box ix clicked
    // Parse textContent of the box
    // Feed it into a function that processes

/* 

If a number is clicked:
    If no operator
        Clear first number + second number?
        Store as first number
        Display the number
    If operator precedes it (+, -, *, /)
        Store as second number
If an operator is clicked:
    If first number is present
        Store operator
    If first number, operator, second number present
        Run operate
        Update results
        Store result as new first number
        Clear operator


If = is pressed
    Check if the stored numbers are present
        Run operate
        Update results
        Store result as new first number
        Clear operator second number
    Else if only first number and operator present
        Return first number
        Clear operator
*/