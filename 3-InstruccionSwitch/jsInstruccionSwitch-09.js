/*Nombre y apellido: Belen Soria
Tema: Switch 
Ej: N° 09

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra
$15.000 por cada estadia como base, se pide el ingreso de una estacion
del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba 
tiene un porcentaje del 10% Mar del plata tiene un porcentaje del 20%

en Verano: bariloche tiene un porcentaje del 20% cataratas y Cordoba 
tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin porcentaje*/
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var precioEstadia = 15000;
	var porcentajeDestino;
	var precioFinal;
	

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentajeDestino = 1.2;
					break;
				case "Mar del plata":
					porcentajeDestino = 0.8;
					break;
				default: 
					porcentajeDestino = 0.9;
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentajeDestino = 0.8;
					break;
				case "Mar del plata":
					porcentajeDestino =1.1;
					break;
				default: 
					porcentajeDestino = 1.2;
					break;
			}
			break;

		default:
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas": 
					porcentajeDestino = 1.1;
					break;
				case "Cordoba":
					porcentajeDestino = 1; 
					break;
			}
			break;
	}
	precioFinal = precioEstadia * porcentajeDestino;
	alert("El precio final del viaje a " + destinoIngresado + ", en la estacion "+ estacionIngresada +" es: $" + precioFinal );
}
/*function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var mensaje;
	var precioEstadia = 1500;
	var aumentoDestino = 0;
	var descuentoDestino = 0;
	var precioFinal;
	

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumentoDestino = 20;
					break;
				case "Mar del plata":
					descuentoDestino =20;
					break;
				default: 
					descuentoDestino = 10;
					break;
			}
			break;
 

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuentoDestino = 20;
					break;
				case "Mar del plata":
					aumentoDestino =20;
					break;
				default: 
					aumentoDestino = 10;
					break;
			}
			break;

		default:
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumentoDestino = 10;
					break;
				case "Mar del plata":
					aumentoDestino =10;
					break;
				case "Cataratas": 
					aumentoDestino = 10;
					break;
				case "Cordoba":
					descuentoDestino = 0; 
					break;
			}
			break;
	}
	if(aumentoDestino != 0)
	{
		aumentoDestino = precioEstadia * aumentoDestino /100;
		precioFinal = precioEstadia + aumentoDestino;
	}
	else 
	{
		descuentoDestino = precioEstadia * descuentoDestino /100;	
		precioFinal = precioEstadia - descuentoDestino;
	}
	switch
	alert("El precio final del viaje a " + destinoIngresado + " en la estacion "+ estacionIngresada );

}  */