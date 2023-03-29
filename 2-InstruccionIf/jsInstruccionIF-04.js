/* 
Nombre y apellido: Belen Soria
Ej: Instrucción IF ejercicio n° 04

Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente
 edad entre 13 y 17 años (inclusive).
*/
function mostrar()
{
	var edadIngresada;

	// Toma el valor via caja de texto y lo parsea
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	// Evalua la condición
	if(edadIngresada < 18 && edadIngresada > 12) 
	{
		// Muestra en pantalla si la condiciónse cumple
		alert("Usted es adolescente.");
	}

}