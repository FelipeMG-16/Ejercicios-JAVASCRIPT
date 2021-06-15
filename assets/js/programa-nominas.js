alert("Este programa te ayudará a calcular tu sueldo"); //Mandamos la alerta para indicar la función del programa

/* la función parseInt nos ayuda a que el valor ingresado (en este caso una
    cadena de texto) sea convertida en un entero, sólo así se podran 
    ejecutar las operaciones correspondientes*/

// Declarando variables

var sueldo = parseInt(prompt("¿Cual es tu sueldo diario en pesos?")); //Asignamos el dato introducido a una variable
var sueldoquincenal = sueldo * 15; //Multiplicamos el sueldo diario por la cantidad de dias trabajados
var sueldomensual = sueldo * 30;

//Calculando Retención IMSS
var IMSSquincenal = sueldoquincenal * 0.1; //Calculamos la retención del IMSS, multiplicando el sueldo quincenal por 0.1 equivalente al 10%
var IMSSmensual = sueldomensual * 0.1; //Calculamos la retención del IMSS, multiplicando el sueldo mensual por 0.1 equivalente al 10%

//Calculando Retención ISR
var ISRmensual = sueldomensual * 0.3; // Calculamos la retención del ISR, multiplicando el suedo mensual por 0.3 equivalente al 30%
var ISRquincenal = sueldoquincenal * 0.3; // Calculamos la retención del ISR, multiplicando el suedo quincenal por 0.3 equivalente al 30%

//Sueldos despues de impuestos
var netomensual = sueldomensual - IMSSmensual - ISRmensual; //Creamos una variable para el neto mensual, descontando las retenciones anteriores
var netoquincenal = sueldoquincenal - IMSSquincenal - ISRquincenal; //Creamos una variable para el neto quincenal, descontando las retenciones anteriores

//Imprimiendo resultados

alert("Tu sueldo bruto mensual es : $" + sueldomensual); // Imprimimos el suedo bruto mensual
alert("Tu sueldo bruto quincenal es : $" + sueldoquincenal); //Imprimimos el sueldo bruto quincenal
alert("Tu sueldo neto mensual es: $" + netomensual); //Imprimimos el sueldo neto mensual
alert("Tu sueldo neto quincenal es: $" + netoquincenal); //Imprimimos el sueldo neto quincenal

console.log("Tu sueldo bruto mensual es : $" + sueldomensual); // Imprimimos el suedo bruto mensual
console.log("Tu sueldo bruto quincenal es : $" + sueldoquincenal); //Imprimimos el sueldo bruto quincenal
console.log("Tu sueldo neto mensual es: $" + netomensual); //Imprimimos el sueldo neto mensual
console.log("Tu sueldo neto quincenal es: $" + netoquincenal); //Imprimimos el sueldo neto quincenal
