/*
Nombre y apellido: Belen Soria
Ej: E/S ejercicio n° 09


Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseFloat), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*
function mostrarAumento()
{
	var sueldoIngresado;
	var aumento;
	var sueldoAumentado;

	// tomo el valor ingresado por la caja de texto en la variable
	sueldoIngresado = document.getElementById("txtIdSueldo").value;
	
	// pasa el valor a decimal: parseFloat 
	sueldoIngresado = parseFloat (sueldoIngresado);
	
	// se realiza el aumento (*0.1 o *10/100)
	aumento = sueldoIngresado * 10/100;
	sueldoAumentado = sueldoIngresado + aumento;

	// imprime en pantalla el resultado del aumento del 10%
	document.getElementById("txtIdResultado").value = sueldoAumentado;

}*/


/*
Nombre y apellido: Belen Soria
Ej: E/S ejercicio n° 09 BIS

9 BIS : Debemos lograr tomar el importe por ID ,transformarlo a entero (parseInt),
 y tambien pedirle al usuario mediante una entrada de datos cual es el aumento a
 realizar, y luego mostrar el importe con el aumento en el TextBox"RESULTADO".*/
 function mostrarAumento()
{
	var sueldoIngresado;
	var aumento;
	var sueldoAumentado;

	
	// tomo el valor ingresado por la caja de texto en la variable
	sueldoIngresado = document.getElementById("txtIdSueldo").value;

	// pide por pantalla el porcentaje a ingresar
	aumento = prompt("Ingrese el porcentaje de aumento a realizar: ");

	// pasa el valor a decimal: parseFloat
	sueldoIngresado = parseFloat (sueldoIngresado);
	aumento = parseFloat(aumento);

	// se calcula el aumento
	aumento = sueldoIngresado * aumento/100;
	// se suma el aumento al sueldo
	sueldoAumentado = sueldoIngresado + aumento;

	// imprime en pantalla el resultado del aumento ingresado
	document.getElementById("txtIdResultado").value = sueldoAumentado;

}