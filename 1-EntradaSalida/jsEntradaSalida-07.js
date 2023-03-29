/*
Nombre y apellido: Belen Soria
Ej: E/S ejercicio n° 07

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numIngresado1;
	var numIngresado2;
	var resultado;
	
	numIngresado1 = document.getElementById("txtIdNumeroUno").value;
	numIngresado2 = document.getElementById("txtIdNumeroDos").value;
	
	numIngresado1 = parseInt(numIngresado1);  
	numIngresado2 = parseInt(numIngresado2);

	resultado = numIngresado1 + numIngresado2;

	alert("La suma realizada es: " + resultado);
}

function restar()
{
	var numIngresado1;
	var numIngresado2;
	var resultado;
	
	numIngresado1 = document.getElementById("txtIdNumeroUno").value;
	numIngresado2 = document.getElementById("txtIdNumeroDos").value;
	
	numIngresado1 = parseInt(numIngresado1);  
	numIngresado2 = parseInt(numIngresado2);

	resultado = numIngresado1 - numIngresado2;

	alert("La resta realizada es: " + resultado);
}

function multiplicar()
{ 
	var numIngresado1;
	var numIngresado2;
	var resultado;
	
	numIngresado1 = document.getElementById("txtIdNumeroUno").value;
	numIngresado2 = document.getElementById("txtIdNumeroDos").value;
	
	numIngresado1 = parseInt(numIngresado1);  
	numIngresado2 = parseInt(numIngresado2);

	resultado = numIngresado1 * numIngresado2;
	
	alert("El resultado de la multiplicación es: " + resultado);
}

function dividir()
{
	var numIngresado1;
	var numIngresado2;
	var resultado;
	
	numIngresado1 = document.getElementById("txtIdNumeroUno").value;
	numIngresado2 = document.getElementById("txtIdNumeroDos").value;
	
	numIngresado1 = parseInt(numIngresado1);  
	numIngresado2 = parseInt(numIngresado2);

	resultado = numIngresado1 / numIngresado2;
	
	alert("El resultado de la división realizada es: " + resultado);
}

