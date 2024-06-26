function add(a, b) {
    return parseFloat(a) + parseFloat(b);   
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
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
    const nums = [0, 1,2,3,4,5,6,7,8,9]
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
let result = document.querySelector('.result');

let previousInput = null;

buttons.addEventListener("click", function(button){
    // Proceeds only if a button has been clicked
    const isButton = (button.target.classList.contains('box'));
    if (!isButton) return;
    
    // Runs different cases based on whether a number, operator or clear is clicked
    let input = button.target.textContent;
    console.log(input + ' ' + isNumber(input) + ' ' + isOperator(input));
    switch(true) {
        case isNumber(input):
            clickNumber(input);
            previousInput = input;
            break;
        case isOperator(input):
            clickOperator(input);
            previousInput = input;
            break;
        case (input == '='):
            clickEquals(input);
            previousInput = input;
            break;
        case (input == 'Clear'):
            clickClear();
            previousInput = input;
            break;
        case (input == '.'):
            alert('to be implemented');
            break;
        case (input == 'Undo'):
            alert('to be implemented');
            break;
    }
})

function clickNumber(input) {
    console.log(input);
    if (firstNum && !operator) {
        if(firstNum == 0) {
            firstNum = input;
        } else {
            firstNum = firstNum + input;
        }
        result.textContent = firstNum;
    } else if (!operator) {
        firstNum = input;
        secondNum = null;
        result.textContent = input;
    } else if (operator && !secondNum) {
        secondNum = input;
        result.textContent = input;
    } else if (operator && secondNum) {
        secondNum = secondNum + input;
        result.textContent = secondNum;
    }
}

function clickOperator(input) {
    console.log(input);
    if (firstNum && operator && secondNum) {
        console.log(`operating...${firstNum}${operator}${secondNum}`);
        firstNum = operate(firstNum,operator,secondNum);
        operator = secondNum = null;
        result.textContent = firstNum;
    } else if (!firstNum) {
        firstNum = 0;
        operator = input;
        result.textContent = operator;
    } else if (firstNum || ! operator) {
        operator = input;
        result.textContent = operator;
    } 
}

function clickEquals(input) {
    if (firstNum && operator && secondNum) {
        console.log(`operating...${firstNum}${operator}${secondNum}`);
        firstNum = operate(firstNum,operator,secondNum);
        operator = secondNum = null;
        result.textContent = firstNum;
    }
}

function clickClear() {
    firstNum = operator = secondNum = null;
    result.textContent = 0;
}

/*

If a number is clicked:
    If no operator
        Clear first number + second number?
        Store as first number
        Display the number
    If operator precedes it (+, -, *, /)
        Store as second number
        Runs operate 
If an operator is clicked:
    If first number not present
        FirstNUm = 0
        store operator
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