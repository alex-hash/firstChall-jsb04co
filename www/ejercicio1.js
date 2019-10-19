'use strict';

//* ------------------------------EJERCICIO 1------------------------- */

function calculadora() {
    const num1 = parseInt(prompt("Introduce el número 1"));
    const num2 = parseInt(prompt("Introduce el número 2"));
    let operacion = prompt("Introduce la operación (+,-,*,/,potencia)");

    if (operacion === '+') {
        alert(suma(num1, num2));
    } else if (operacion === '-') {
        alert(resta(num1, num2));
    } else if (operacion === '*') {
        alert(multiplicacion(num1, num2));
    } else if (operacion === '/') {
        alert(division(num1, num2));
    } else if (operacion === 'potencia') {
        alert(potencia(num1, num2));
    } else {
        alert("No se reconoce la operacion");
    }
}

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function potencia(num1, num2) {
    return Math.pow(num1, num2);
}
calculadora();