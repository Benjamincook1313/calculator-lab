function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}

function powerOf(num1, num2){
  return num1 ** num2;
}

function mod(num1, num2){
  return num1 % num2;
}

function sqrt(num1){
  return Math.sqrt(num1);
}

function calculate(expression) {
  const token = expression.split(' ');

  if(token.length > 3 || token.length < 2) {
    alert("Invalid Expression!");
    return;
  }
  
  const num1 = token.length === 3? +token[0]: +token[1];
  const op = token.length === 3? token[1]: token[0];
  const num2 = Number.isNaN(token[2])? token[2]: +token[2];
  
  // if(Number.isNaN(num1) || Number.isNaN(num2)) {
  //   alert("Invalid Expression!");
  //   return;
  // }

  switch(op){
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "^": 
      return powerOf(num1, num2);
    case "%":
      return mod(num1, num2);
    case "sqrt":
      return sqrt(num1);
    default: 
      return undefined;
  }

}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
