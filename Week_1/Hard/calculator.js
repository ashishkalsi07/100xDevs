function calculator() {
  let num1;
  do {
      num1 = window.prompt('Type in your first number');
      if (num1 === null) {
        alert('Calculator terminated');
        return;
      }
      num1 = parseFloat(num1);
      if (isNaN(num1)) {
        alert('Please enter a valid number for num1');
      }
  } while(isNaN(num1));

  let num2;
  do {
      num2 = window.prompt('Type in your second number');
      if (num2 === null) {
        alert('Calculator terminated');
        return;
      }
      num2 = parseFloat(num2);
      if (isNaN(num2)) {
        alert('Please enter a valid number for num2');
      }
  } while(isNaN(num2));

  let operator;
  do {
      operator = window.prompt('Type in your operator (\"add\", \"substract\",  \"multiply\", \"divide")');
      
      if (operator === null) {
        alert('Calculator terminated');
        return;
      }
      
      switch (operator) {
          case 'add':
          alert(num1 + " + " + num2 + " = " + (num1 + num2));
          break
        case 'substract':
          alert(num1 + " - " + num2 + " = " + (num1 - num2));
          break
        case 'multiply':
          alert(num1 + " * " + num2 + " = " + (num1 * num2));
          break
        case 'divide':
          alert(num1 + " / " + num2 + " = " + (num1 / num2));
          break
        default:
          alert('Please enter a valid operator (add, substract, multiply, divide)');
          break
      }
  } while(operator !== 'add' && operator !== 'substract' && operator !== 'multiply' && operator !== 'divide')

}

calculator();

/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
    constructor() {
      this.result = 0;
    }
    add(num) {
      if (typeof num === "number") {
        this.result += num;
      } else {
        throw new Error("Invalid number");
      }
    }
    subtract(num) {
      if (typeof num === "number") {
        this.result -= num;
      } else {
        throw new Error("Invalid number");
      }
    }
    multiply(num) {
      if (typeof num === "number") {
        this.result *= num;
      } else {
        throw new Error("Invalid number");
      }
    }
    divide(num) {
      if (typeof num === "number" && num !== 0) {
        this.result /= num;
      } else {
        throw new Error("Invalid number");
      }
    }
    clear() {
      this.result = 0;
    }
    getResult() {
      return this.result;
    }
    calculate(expression) {
      this.result = eval(expression.replace(/\s+/g, " "))
      if(this.result === Infinity) {
        throw new Error("Infinity")
      }
      return this.result;
    }
  }
  
  module.exports = Calculator;          