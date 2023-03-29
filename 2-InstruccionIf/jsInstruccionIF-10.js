/*
Nombre y apellido: Belen Soria
Ej: Instrucción IF ejercicio n° 10

10. Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	let numeroRandom;
	let mensaje;

	numeroRandom = Math.floor(Math.random() * 10 + 1);
	// console.log(numeroRandom);
	if(numeroRandom > 8)
	{
		mensaje = "EXCELENTE";
	}
	else
	{
		if(numeroRandom > 3)
		{
			mensaje = "APROBÓ";
		}
		else
		{
			mensaje = "Vamos, la proxima se puede.";
		}
	}

	alert(mensaje);

}