/*
Nombre y apellido: Belen Soria
Ej: E/S ejercicio n° 08

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendoIngresado;
	var divisorIngresado;
	var resto;

	// tomo el valor ingresado por la caja de texto en la variable
	dividendoIngresado = document.getElementById("txtIdNumeroDividendo").value;
	divisorIngresado = document.getElementById("txtIdNumeroDivisor").value;
	
	// pasa el valor a número: parseInt
	dividendoIngresado = parseInt(dividendoIngresado);
	divisorIngresado = parseInt(divisorIngresado);

	resto = dividendoIngresado % divisorIngresado 

	alert("El resto de la divisón ingresada es: " + resto);
}
