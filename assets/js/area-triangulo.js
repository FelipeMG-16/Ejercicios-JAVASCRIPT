alert('Hola mundo'); //Sirve para mostrar la ventana emergente

var nombre= 'Felipe de Jesús' //Declaración de variables
var apellidos= 'Maqueda González' //Declaración de variables
var edad= 29; //Declaración de variable

/*Para imprimir mensajes de JS por consola usamos console.log.
Esto funciona para realizar depuraciones y validar como devuelve
los datos el programa.*/

console.log(nombre + ' ' + apellidos);
console.log('Mi edad es:'+ edad);

console.log(nombre,apellidos);

var numero =11;  //Declaración de variable como número
var otroNumero = '11'; //Declaración de variable como cadena de texto.

/* Usar typeof nos ayuda a mostar en consola el tipo de dato, en caso
de que el valor se encuentre dentro de comillas '', se identifica como
una cadena de texto (string)*/

console.log (typeof (numero));
console.log (typeof (otroNumero));


var base = parseInt (prompt('Escribe la base del triangulo:'));
var altura = parseInt (prompt ('Escribe la altura del triangulo:'));
var resultado = ( base * altura ) / 2;
alert ('El area del triangulo es: ' + resultado);

/*Cuando usamos el prompt, muestra la cajita de texto, pero lo que se
escribe no lo toma como número, sólo como un texto, por lo que no se puede
realizar operaciones matemáticas.
Cuando usamos parseInt el dato se convierte en un número, ya podemos
realizar la operación aritmética para obtener el área*/

/* La buena práctica de programación nos sugiere realizar el cambio de
texto a número */

/* NaN (Not A Number), sucede cuando usamos el prompt, por lo que la
información ingresada es de caracter cadena de texto y no se pueden
realizar operaciones aritméticas, por lo que arroja ese error */

