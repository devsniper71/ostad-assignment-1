function calculate() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var operation = document.getElementById("operation").value;
  var result;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers");
    return;
  }

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Division by zero is not allowed");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Invalid operation");
      return;
  }

  document.getElementById("result").innerText = `Result: ${result}`;
}
