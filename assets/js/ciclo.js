//*Crear un ciclo donde se imprima el arreglo de meses

//* Declaramos los elementos del array, en este caso los meses del año
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

//! Para nuestro ciclo, es importante usar la propiedad lenght ya que ésta nos ayudará a establecer el límite de nuestro ciclo.
//! En este caso, la propiedad length indica un "tope" de 12 valores - correspondientes a los meses del año -.

//* Nuestro ciclo inicia en un valor 0, donde para imprimirse el valor tendrá que ser menor al número de la propiedad lenght -12-
for (i = 0; i < meses.length; i++) {
  console.log(meses[i]); //* Imprimimos en consola los meses correspondientes, desde el 0 hasta el 11
}
