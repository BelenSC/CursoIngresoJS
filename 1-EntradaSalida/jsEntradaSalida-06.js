/*
Nombre y apellido: Belen Soria
Ej: E/S ejercicio n° 6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numIngresado1;
	var numIngresado2;
	var resultado;
	// guarda eel numero ingresado por la caja de texto en la variable 

	numIngresado1 = document.getElementById("txtIdNumeroUno").value;
	numIngresado2 = document.getElementById("txtIdNumeroDos").value;
	
	//trasnforma la cadena ingresada en numero
	numIngresado1 = parseInt(numIngresado1);  
	numIngresado2 = parseInt(numIngresado2);

	resultado = numIngresado1 + numIngresado2;

	alert("La suma realizada es: " + resultado);
}

