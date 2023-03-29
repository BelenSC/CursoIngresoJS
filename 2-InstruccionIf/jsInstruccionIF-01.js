

/* 
Nombre y apellido: Belen Soria
Ej: Instrucción IF ejercicio n° 01

Enunciado:
Al ingresar una edad que sea
igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{
	var edadIngresada;

	// Toma el valor via caja de texto y lo parsea
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada == 15)
	{
		alert("Niña bonita");
	}

	alert("Fin.")
}