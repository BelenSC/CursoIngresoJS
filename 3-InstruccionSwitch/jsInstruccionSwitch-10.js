/*Nombre y apellido: Belen Soria
Tema: Switch 
Ej: N° 10
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según
la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo o se viaja a Bariloche
*/
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var mensaje;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "Se viaja.";
					break;
				default: 
					mensaje = "No se viaja";
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja.";
					break;
				default: 
					mensaje = "No se viaja";
					break;
			}
			break;

		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "Se viaja.";
					break;
				default:
					mensaje = "No se viaja.";
					break;
			}
			break;

		default:
			mensaje = "No se viaja."; 
			break;
	}
	alert(mensaje);
}