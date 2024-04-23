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
