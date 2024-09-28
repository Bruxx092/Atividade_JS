const titulo = document.getElementById("exibir");

let num1 = 7;
let num2 = 3;
let operacao = "+";
let resultado;

switch (operacao) {
  case "/":
    result = num1 / num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "+":
    result = num1 + num2;
    break;
  default:
    resultado = "operacao invalida";
}
titulo.innerHTML = result;
