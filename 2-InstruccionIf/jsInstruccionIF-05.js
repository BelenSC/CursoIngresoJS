/* 
Nombre y apellido: Belen Soria
Ej: Instrucción IF ejercicio n° 06

Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
	var edadIngresada;

	// Toma el valor via caja de texto y lo parsea
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	// Evalua la condición
	if(edadIngresada < 13 || edadIngresada > 17) 
	{
		alert("Usted no es adolescente.");
	}

}