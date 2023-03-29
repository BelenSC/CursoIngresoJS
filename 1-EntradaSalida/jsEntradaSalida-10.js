/*
Nombre y apellido: Belen Soria
Ej: E/S ejercicio n° 10 BIS

Debemos lograr tomar el importe por ID. Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 % en el cuadro de texto "RESULTADO"*/


function mostrarAumento()
{
	var importeIngresado;
	var descuentoIngresado;
	var importeDescontado;

	// tomo el valor ingresado por la caja de texto en la variable
	importeIngresado = document.getElementById("txtIdImporte").value;
	
	// pide por pantalla el descuento a ingresar
	descuentoIngresado = prompt("Ingrese el descuento en porcentaje a realizar: ");

	// pasa la variable a numero
	importeIngresado = parseInt (importeIngresado);
	descuentoIngresado = parseFloat(descuentoIngresado);

	// se realiza el descuento ingresado
	descuentoIngresado = importeIngresado * descuentoIngresado/100;
	importeDescontado = importeIngresado - descuentoIngresado;

	// imprime en pantalla el resultado del descuento ingresado
	document.getElementById("txtIdResultado").value = importeDescontado;
	alert("Descuento realizado: " + descuentoIngresado)
}