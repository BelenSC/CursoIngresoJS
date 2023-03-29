/* Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.
*/
function mostrar()
{
	var depositoIngresado;
	var descripcionProducto;
	var pesoProductoIngresado;

	var contadorAvellaneda=0;
	var contadorCaba=0;
	var contadorLanus=0;

	var flagdelPrimero=0;
	var productoPesoMaximo;
	var nombrePesoMaximo;

	var bodegaMayorIngreso;

	var acumuladorAvellaneda=0;
	var acumuladorCaba=0;
	var acumuladorLanus=0;

	var respuesta="si";

	while(respuesta=="si")
	{
		depositoIngresado =prompt("Ingresar deposito: avellaneda/caba/lanus");
		while(depositoIngresado!="avellaneda" && depositoIngresado !="caba" && depositoIngresado !="lanus")
		{
			depositoIngresado =prompt("¡!Reingresar deposito:");
		}
		descripcionProducto= prompt("Ingrese la descripción del producto");
		pesoProductoIngresado=parseFloat(promtp("Ingrese el peso del producto"));

		if(productoPesoMaximo< pesoProductoIngresado || flagdelPrimero ==0)
		{
			productoPesoMaximo = pesoProductoIngresado;
			nombrePesoMaximo = descripcionProducto;
			flagdelPrimero=1;
		}

		switch(depositoIngresado)
		{
			case "avellaneda":
				contadorAvellaneda++;
				acumuladorAvellaneda+=pesoProductoIngresado;
			break;
			case "caba":
				contadorCaba++;
				acumuladorCaba+=pesoProductoIngresado;
			break;
			case "lanus":
				contadorLanus++;
				acumuladorLanus+=pesoProductoIngresado;
			break;
		}

		respuesta= prompt("¿Desea ingresar más productos?");
	}

	if(contadorAvellaneda> contadorCaba && contadorAvellaneda > contadorLanus)
	{
		bodegaMayorIngreso="Avellaneda";
	}
	else
	{
		if(contadorCaba>contadorLanus)
		{
			bodegaMayorIngreso = "CABA ";
		}
		else
		{
			bodegaMayorIngreso ="Lanus";
		}
	}
	
	mensaje= "a) El producto con mas peso entre las tres bodegas fue: "+ nombrePesoMaximo +", e indicar el promedio: "
			+"<br>"+ "b) Cual fue la bodega con mas ingresos: bodega "+ bodegaMayorIngreso 
			+"<br>"+ "c) Cual es la bodega mas llena: "
			+"<br>"+ "d) Porcentaje disponible de cada bodega:";
	document.write(mensaje);
}
