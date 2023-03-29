/*Nombre y apellido: Belen Soria
Tema: Switch 
Ej: N° 07
Al selecionar un destino , indicar el punto
cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;
	switch(destinoIngresado)
	{
		case "Mar del plata":
			mensaje =" se encuentra en el este.";
			break;
		case "Ushuaia":
			mensaje =" se encuentra en el sur.";
			break;
		default:
			mensaje =" se encuentra en el norte.";
			break;
	}
	alert(destinoIngresado + mensaje);
}