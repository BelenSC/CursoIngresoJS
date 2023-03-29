/*
Nombre y apellido: Belen Soria
Ej: Instrucción IF ejercicio n° 08

Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	let edadIngresada;
	let estadoCivilElegido;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivilElegido = document.getElementById("estadoCivil").value;
	
	if(edadIngresada < 17 )
	{
		if(estadoCivilElegido != "Soltero")
		{
			//nada 
		}
	}
	else
	{
		if(estadoCivilElegido == "Soltero")
		{
			alert("Es soltero y no es menor.");
		}
	}
}
// que es: case sensitive