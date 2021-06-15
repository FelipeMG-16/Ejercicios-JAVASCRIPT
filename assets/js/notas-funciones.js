// .push agrega elementos al final de la lista del arreglo
var rutas = frutas.push('Naranja') 

//En este caso queda: ['Manzana','Banana','Naranja']

//.pop elimina el ultimo elemento de un arreglo
let ultimo = frutas.pop
//para ordenar se usa .sort

var equipos = ['Real Madrid','Juventus', 'Manchester Utd', 'Bayern Munich'];

equipos.sort(); // ordena los elementos de mayor a menor
//['Bayern Munich','Mancherster Utd', 'Juventus','Real Madrid'];

equipos.reverse(); //
//['Real Madrid','Manchester Utd','Juventus','Bayern Munich']

equipos.length //para arrojar la cantidad de elementos
//4


//Acceder a los elementos de un array

//El indice siempre empieza en cero (empezar a numerar desde el 0)
var frutas = ['manzana','mango','fresa']
console.log(frutas[0]) //'manzana'
console-log(frutas[1]) //'mango'
console.log (frutas[2]) //fresa


/*Ciclos para repetir la ejecución de un código varias veces*/

//Repetir "Hola Mundo" 5 veces
console.log ("Hola Mundo");
console.log ("Hola Mundo");
console.log ("Hola Mundo");
console.log ("Hola Mundo");
console.log ("Hola Mundo");



/*Ciclo for

El for tiene la siguiente sintaxis:

for(<inicialización>;<condicion>;<incrementador>){
    el cuerpo del ciclo, el código que se repite mientras que
    la condición sea verdadera*/


/*inicializmos i=0, y la condición es que se muestre nuestro valor
850 veces, entonces se ejecuta la primera, se almacena y i=1,
entonces como i es menor a 850 y se vuelve a ejecutar y ahí i=2 y
así que lleguemos a 851, porque 850 no es menor que 850 por lo que
nos imprimiría el valor 850 incluso*/

for(var i=0; i<850; i++){

    console.log ("Hola Mundo");

}



var frutas = ["Manzana", "Banana"];

var pais = [
  "Mexico",
  "España",
  "Argentina",
  "Chile",
  "Colombia",
  "Venezuela",
  "Perú",
  "Costa Rica",
];

var lista = [12, 25, 48];