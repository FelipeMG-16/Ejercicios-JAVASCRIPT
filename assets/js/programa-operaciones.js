/*Hacer un código que le pida al usuario 2 números a través del prompt, 
estos números los vamos a Sumar, restar multiplicar y dividir. Al final 
mostrar el resultado.*/

alert("Este programa te ayudará a realizar operaciones aritméticas básicas"); //Mandamos la alerta para indicar la función del programa

/* la función parseInt nos ayuda a que el valor ingresado (en este caso una
    cadena de texto) sea convertida en un entero, sólo así se podran 
    ejecutar las operaciones correspondientes*/

// Declarando variables

var primervalor = parseInt(prompt("¿Cual es el primer valor")); //Asignamos el primer dato introducido a una variable
var segundovalor = parseInt(prompt("¿Cual es el segundo valor")); //Asignamos el segundo dato introducido a una variable

//Definiendo operaciones

var suma = primervalor + segundovalor;
var resta = primervalor - segundovalor;
var multiplicacion = primervalor * segundovalor;
var division = primervalor / segundovalor;

//Imprimiendo resultados

alert("La suma de los dos valores es: " + suma);
alert("La resta de los dos valores es: " + resta);
alert("La multiplicación de los dos valores es: " + multiplicacion);
alert("La división de los dos valores es: " + division);

console.log("La suma de los dos valores es: " + suma);
console.log("La resta de los dos valores es: " + resta);
console.log("La multiplicación de los dos valores es: " + multiplicacion);
console.log("La división de los dos valores es: " + division);
