// operation functions
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
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "add":
    return add(a, b);
    break;
    case "subtract":
    return subtract(a, b);
    break;
    case "multiply":
    return multiply(a, b);
    break;
    case "divide":
    return divide(a, b);
    break;
  }
}


let previousNum = '';
let currentNum = '';
let sum;
let previousOp = '';
let currentOp;

// click number buttons
const numbers = document.getElementsByClassName("number");

Array.from(numbers).forEach(function(element) {
      element.addEventListener("click", getInput);
})

function getInput() {
  currentNum += this.innerHTML;
  display(currentNum);
}


// click operator buttons
const operators = document.getElementsByClassName("basic-operator");

Array.from(operators).forEach(function(element) {
  element.addEventListener("click", getOperator);
})

function getOperator() {
  currentOp = this.id;
  if (currentNum == '') {
    display("Error, reset!");
    reset();
  } else {
    if (previousOp == '') {
      sum = currentNum;
    }

    if (previousNum !== '') {
      calculate(currentOp);
    }
    previousNum = sum;
    previousOp = currentOp;
    currentNum = '';
  }

}


// display value on screen
let displayValue = document.getElementById("content").innerHTML;
function display(displayValue) {
  document.getElementById("content").innerHTML = displayValue;
}


// calculate the input numbers with chosen operator
function calculate(operator) {
  let current = parseInt(currentNum);
  let prev = parseInt(previousNum);
  if (operator !== "equal") {
      sum = operate(previousOp, prev, current);
      if (previousOp == 'divide' && current == 0) {
        display('Error, reset!');
        reset();
      } else {
        display(sum);
        previousNum = sum.toString();
      }
  } else if (operator == "equal") {
    sum = operate(previousOp, prev, current);
    if (previousOp == 'divide' && current == 0) {
      display('Error, reset!');
      reset();
    } else {
      display(Math.round(sum * 100000000) / 100000000);
      reset();
    }
  }
}

// reset all variables, used when user hits equal '=' or AC
function reset() {
  previousNum = '';
  currentNum = '';
  sum = '';
  previousOp = '';
  currentOp = '';
}

// click AC button -> reset
document.getElementById("AC").addEventListener("click", allClear);

function allClear() {
  reset();
  display(sum);
}
