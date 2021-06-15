alert('Este programa te ayudará a calcular tu sueldo'); 

var sueldodiario= prompt('Por favor ingresa tu sueldo diario en pesos mexicanos');
var quincena= 15;
var mensual= 30;
var imss=0.1;
var isr=0.3;
var sueldoquincena= sueldodiario*quincena;
var sueldomensual=sueldodiario*mensual;
var retencionimssmes=sueldomensual*imss;
var retencionimssquincena=sueldoquincena*imss;
var retencionisrmens=sueldomensual*isr;
var retencionisrquincena=sueldoquincena*isr;


console.log (typeof ('El sueldo bruto mensual es : ' + (mensual)));
alert ('El sueldo bruto quincenal es : ' + quincena );
alert ('La retención del IMSS mensual es de : ' + retencionimssmes);
alert ('La retención del IMSS quincenal es de : ' + retencionimssquincena);
alert ('La retención del ISR mensual es de : ' + retencionisrmens);
alert ('La retención del ISR quincenal es de : ' + retencionisrquincena);
alert ('Tu sueldo neto mensual es: ' + sueldomensual-retencionimsmes-retencionisrmens);
alert ('Tu sueldo neto quincenal es: ' + sueldoquincena-retencionimsquincena-retencionisrquincena);
alert ('El area del triangulo es: ' + sueldodiario);
