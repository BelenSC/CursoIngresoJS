/* Simulacro de examen
Nombre y apellido: Belen Soria
División: E
Parte: 3.
Ejercicio 3

Una fábrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos más abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

a)Precio promedio por mueble vendido
b)Cantidad total de muebles de madera
c)El mueble de metal más alto 
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podrán ser cero ni negativo.*/
function mostrar()
{	
	var nombreIngresado;
	var tipoMaterialIngresado;
	var pesoIngresado;
	var alturaIngresado;
	var anchuraIngresada;
	var precioIngresado;

	var porcentaje;

	var mensaje;
	var respuesta="si";

	var contadorVentas=0;
	var precioPromedioPorMueble;
	var maderaMueblesContador=0;
	var vidrioMueblesContador=0;
	var metalMueblesContador=0;

	var muebleMetalMasAlto;
	var nombreMuebleMetalAlto;
	var muebleMasLiviano;
	var nombreMuebleLiviano;
	var flagDelPrimero=0;
	var flagMuebleLiviano=0;

	var vidrioPorcentaje;
	var metalPorcentaje;
	var maderaPorcentaje;

	var maderaPrecioFinal=0;
	var vidrioPrecioFinal=0;
	var metalPrecioFInal=0;
	var importeFinalConDescuento;
	var precioFinalTotal;

	while (respuesta=="si")
	{
		nombreIngresado=prompt("Ingrese el nombre del mueble");

		tipoMaterialIngresado=prompt("Ingrese el material del mueble (madera, metal y vidrio): ");
		while (tipoMaterialIngresado != "madera" && tipoMaterialIngresado !="metal" && tipoMaterialIngresado !="vidrio")
		{
			tipoMaterialIngresado=prompt("¡! Reingrese el material del mueble (madera, metal y vidrio): ");
		}

		pesoIngresado=parseFloat(prompt("Ingrese el peso del mueble"));
		alturaIngresado= parseFloat(prompt("Ingrese la altura del mueble: "));
		anchuraIngresada= parseFloat(prompt("Ingrese la anchura del mueble: "));

		precioIngresado=parseFloat(prompt("Ingrese el precio del mueble"));
		while(precioIngresado <1 )
		{
			precioIngresado=parseFloat(prompt("¡!Reingrese el precio del mueble"));
		}

	
		switch(tipoMaterialIngresado)
		{
			case "madera":
				porcentaje= 1.15;
				maderaMueblesContador++;
				maderaPrecioFinal+= precioIngresado;
			break;
			case "metal":
				porcentaje= 0.9;
				if (muebleMetalMasAlto< alturaIngresado || flagDelPrimero==0)
				{
					muebleMetalMasAlto=alturaIngresado;
					nombreMuebleMetalAlto= nombreIngresado;
					flagDelPrimero=1;
				}
				metalMueblesContador++;
				metalPrecioFInal+= precioIngresado;
			breeak;
			case "vidrio":
				porcentaje=0.9;
				vidrioMueblesContador++;
				vidrioPrecioFinal+= precioIngresado;
			break;
		}
		if(muebleMasLiviano> pesoIngresado || flagMuebleLiviano ==0)
		{
			muebleMasLiviano= pesoIngresado;
			nombreMuebleLiviano = nombreIngresado;
			flagMuebleLiviano=1;
		}

		acumuladorPrecio+=precioIngresado;
		contadorVentas++;

		respuesta=prompt("¿Desea continuar?");
	}
	
	maderaPrecioFinal= maderaPrecioFinal*1.15;
	vidrioPrecioFinal = vidrioPrecioFinal*0.9;
	metalPrecioFInal= metalPrecioFInal*0.9;


	precioFinalTotal= vidrioPrecioFinal + metalPrecioFInal+ maderaPrecioFinal;
	precioPromedioPorMueble= precioFinalTotal/contadorVentas;
	maderaPorcentaje = (maderaMueblesContador *100) / contadorVentas;
	vidrioPorcentaje = ( vidrioMueblesContador *100) / contadorVentas;
	metalPorcentaje = ( metalMueblesContador *100) / contadorVentas;

	


	mensaje=" a)Precio promedio por mueble vendido "+ precioPromedioPorMueble
				+"<br>"+ "b)Cantidad total de muebles de madera: "+ maderaMueblesContador
				+"<br>"+ "c)El mueble de metal más alto: "+ nombreMuebleMetalAlto
				+"<br>"+ "d)El mueble más liviano se llama "+ nombreMuebleLiviano
				+"<br>"+ "e)Porcentaje de muebles de cada tipo de material "
				+"<br>"+ " Madera hay un %"+maderaPorcentaje
				+"<br>"+ " vidrio hay un %"+vidrioPorcentaje
				+"<br>"+ " metal hay un %"+ metalPorcentaje
				+"<br>"+ "f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos) "+ precioFinalTotal
				+"<br>"+ "g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos) "+ mader;



	document.write(mensaje);
}

/*+"<br>"+ "

Nombre y apellido: Belen Soria
Ej: E/S ejercicio n° 5

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	alert("El nombre ingresado es " + nombreIngresado + " y tiene " + edadIngresada + " años.");
}*/

