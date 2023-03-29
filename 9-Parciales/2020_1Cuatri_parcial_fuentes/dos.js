/*Nombre y apellido: Belen Soria
práctica: parcial 2020
parte: 2
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
 */
function mostrar()
{
  	var tipoIngresado;
	var cantidadIngresada;
	var precioIngresado;
	
	var totalBolsas=0;
	var respuesta = "si";

	var precioArena;
	var precioCal;
	var precioCemento;
	var cantidadArena=0;
	var cantidadCal=0;
	var cantidadCemento=0;

	var importeAPagar;
	var importeConDescuento;

	var tipoMaximoCantidad;
	var tipoMaximoPrecio

	while(respuesta == "si")
	{
		tipoIngresado = prompt("Ingrese el producto de construcción");
		while (tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado != "cemento")
		{
			tipoIngresado = prompt("!!!Reingrese el tipo de producto:");
		}
		cantidadIngresada = parseInt(prompt("Ingrese la cantidad de bolsas: "));
		totalBolsas+=cantidadIngresada; //para sacar el porcentaje

		precioIngresado = parseFloat(prompt("Ingrese el precio por bolsa: "));
		while(precioIngresado<1)
		{
			precioIngresado = parseFloat(prompt("!!! Reingrese el precio por bolsa: "));
		}
		switch(tipoIngresado)
		{
			case "arena":
				precioArena=precioIngresado;
				cantidadArena+=cantidadIngresada;
			break;
			case "cal":
				precioCal= precioIngresado;
				cantidadCal+= cantidadIngresada;
			break;
			case "cemento":
				precioCemento= precioIngresado;
				cantidadCemento += cantidadIngresada;
			break;
		}
		
		respuesta= prompt("¿Desea continuar?");
	}
// a
	importeAPagar=(precioArena*cantidadArena)+(precioCal*cantidadCal)+(precioCemento*cantidadCemento);
	console.log("a) El importe total a pagar , bruto sin descuento $"+ importeAPagar);
	
	if(totalBolsas>10)
	{
		importeConDescuento= importeAPagar* 0.85;
		console.log("el importe total a pagar con descuento es $"+importeConDescuento);
	}
	else
	{
		if(totalBolsas>30)
		{
		importeConDescuento= importeAPagar* 0.75;
		console.log("el importe total a pagar con descuento es $"+importeConDescuento);
		}
	}

	if(cantidadArena>cantidadCal && cantidadArena> cantidadCemento)
	{
		tipoMaximoCantidad="Arena";
	}
	else
	{
		if(cantidadCal> cantidadCemento)
		{
			tipoMaximoCantidad = "Cal";
		}
		else
		{
			tipoMaximoCantidad = "Cemento";
		}
	}

	if(precioArena>precioCal && precioArena>precioCemento)
	{
		tipoMaximoPrecio="Arena";
	}
	else
	{
		if(precioCal>precioCemento)
		{
			tipoMaximoPrecio="Cal";
		}
		else
		{
			tipoMaximoPrecio="Cemento";
		}
	}
	
	console.log("d) El tipo con más cantidad de bolsas es "+tipoMaximoCantidad);
	console.log("EL tipo más caro es "+ tipoMaximoPrecio);

  	
}
