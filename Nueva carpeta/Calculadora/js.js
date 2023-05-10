let num1 = null;
let operacion = null;
let num2 = null;

function agregarNumero(numero) {
  const resultado = document.getElementById("resultado");
  if (resultado.value === "0" || resultado.value === "" || num2 !== null) {
    resultado.value = numero;
    num2 = null;
  } else {
    resultado.value += numero;
  }
}

function operar(op) {
  const resultado = document.getElementById("resultado");
  if (num1 === null) {
    num1 = parseFloat(resultado.value);
    operacion = op;
    resultado.value = "";
  } else if (num2 === null) {
    num2 = parseFloat(resultado.value);
    num1 = calcularResultado();
    operacion = op;
    resultado.value = "";
  } else {
    num1 = calcularResultado();
    operacion = op;
    resultado.value = "";
  }
}

function borrar() {
  const resultado = document.getElementById("resultado");
  resultado.value = "0";
  num1 = null;
  operacion = null;
  num2 = null;
}

function calcularResultado() {
  const resultado = document.getElementById("resultado");
  switch (operacion) {
    case "+":
      return num1 + parseFloat(resultado.value);
    case "-":
      return num1 - parseFloat(resultado.value);
    case "*":
      return num1 * parseFloat(resultado.value);
    case "/":
      return num1 / parseFloat(resultado.value);
  }
}

function calcular() {
  const resultado = document.getElementById("resultado");
  if (num1 !== null && operacion !== null && resultado.value !== "") {
    num2 = parseFloat(resultado.value);
    const resultadoFinal = calcularResultado();
    resultado.value = resultadoFinal.toString();
    num1 = null;
    operacion = null;
    num2 = null;
  }
}
