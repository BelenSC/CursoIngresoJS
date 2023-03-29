/*Nombre y apellido: Belen Soria
Tema: Switch 
Ej: N° 08
8.Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino.
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje =" hace frio.";
			break;
		case "Cataratas":
			mensaje =" hace calor.";
			break;
		case "Mar del plata":
			mensaje =" hace calor.";
			break;
		case "Ushuaia":
			mensaje =" hace frío.";
			break;
	}
	alert("En " + destinoIngresado + mensaje);
} 