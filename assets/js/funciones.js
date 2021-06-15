//*Crear un objeto que se llame persona, el ejemplo debe tener:
//*Un nombre, Apellidos, Edad y debe tener un método para saludar.
//*Debe incluir otro método donde diga su edad.

//*En consola imprimir el resultado de ambos métodos

function objetos(nombre, apellidos, edad) {
  var persona = {
    nombre: "Felipe",
    apellidos: "Maqueda Gonzalez",
    edad: 25,
    saludar: function () {
      console.log('Hola, mi nombre es ' + this.nombre + " " + this.apellidos);
    },
    miedad:function(){
        console.log('Mi edad es' + this.edad + ' años');
    },
  };
  persona.saludar();
}
