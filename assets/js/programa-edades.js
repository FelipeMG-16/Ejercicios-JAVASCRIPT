/*Hacer un programa en javascript en donde se le pregunte la edad al usuario 
y si el usuario tiene 18 años o mas y menos de 29 años, le impriman por consola 
que ha sido aceptado en el programa de generation, en caso de no ser así mostrar 
un mensaje indicando que no cumple los requisitos del programa*/

alert(
  "Este programa te ayudará a saber si eres candidato a participar en el programa de Generation"
); //Mandamos la alerta para indicar la función del programa

/* la función parseInt nos ayuda a que el valor ingresado (en este caso una
    cadena de texto) sea convertida en un entero, sólo así se podran 
    ejecutar las operaciones correspondientes*/

// Declarando variables

var edad = parseInt(prompt("¿Cual es tu edad?")); //Asignamos el dato introducido a una variable

//Definiendo ingreso

if (edad >= 29) alert("No puedes participar, lo sentimos!");
else {
  alert("Cumples con los requisitos, Bienvenido!!");
}

console.log("Tu edad es : " + edad); // Imprimimos la edad en consola
