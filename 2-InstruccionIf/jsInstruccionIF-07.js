/*
Nombre y apellido: Belen Soria
Ej: Instrucción IF ejercicio n° 07

Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	let edadIngresada;
	let estadoCivilElegido;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivilElegido = document.getElementById("estadoCivil").value;
	
	if(edadIngresada < 18 && estadoCivilElegido != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");	
	}
} 