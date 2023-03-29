/* 
Ejercicio 2
Parcial de ingreso
Nombre y apellido: Belen Soria
División: E

Valve nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un Juego 
en particular, con los atributos definidos más abajo).

Se debe ingresar en cada venta.
-Nombre del juego
-Cantidad de jugadores(1 a 4)
-Edad permitida(Validar que sea mayor a 17 años)
-Nombre del comprador
-Tipo de juego(“plataforma”,”Arcade”,”Online”) 
-Precio

Debido a la suba del dólar  el gobierno pone un impuesto del 15% ante la compra de Juegos de plataforma.
Los Juegos Arcade tienen un 10% de descuento.

Se pide

a)Nombre del comprador más joven que solo compró juegos de plataforma.
b)Cantidad total de juegos vendidos que solo sean de 4 jugadores 
c)Qué tipo de juego fue el más vendió 
d)Nombre del juego más caro
e)Porcentaje de Edades de los compradores de juegos
f)Monto total recaudado bruto de todos los Juegos (sin descuentos ni impuestos)

NOTA: Los precios no podrán ser cero ni negativo.
*/

function mostrar()
{
	var nombreDelJuegoIngresado;
	var cantidadIngresada;
	var edadPermitida;
	var nombreDelComprador;
	var tipoDeJuego;
	var precioIngresado;

	var respuesta="si";
	var mensaje;

	var compradorMasJovenPlataforma;
	var nombreCompradorMasJovenPlataforma;
	var flagCompradorJoven=0;

	var contadorJuegosVendidosCuatroJugadores=0;
	var PlataformaContadrorJuego=0;
	var arcadeContadorJuego=0;
	var onlineContadorJuego=0;
	var nombreTipoDeJuegoMasvendido;

	var juegoMasCaro=0;
	var nombreJuegoMasCaro=0;
	var flagJuegoMascaro=0;

	var promedioEdades;
	var contadorTotalJuegosVendidos=0;
	var acumuladorEdadesJugadores=0;

	var acumuladorMontoRecaudadoBruto=0;
	

	while(respuesta=="si")
	{
		nombreDelJuegoIngresado =prompt(" Ingrese el nombre del juego:");

		cantidadIngresada= parseInt(prompt("Ingrese la cantidad de jugadores: 1 a 4"));
		while(isNaN(cantidadIngresada) || cantidadIngresada < 1 || cantidadIngresada > 4)
		{
			cantidadIngresada= parseInt(prompt("¡!Reingrese la cantidad de jugadores: 1 a 4"));
		}

		edadPermitida = parseInt(prompt("Ingrese la edad: mayores de 17"));
		while(isNaN(edadPermitida) || edadPermitida < 18)
		{
			edadPermitida = parseInt(prompt("¡!Reingrese la edad: mayores de 17"));
		}

		nombreDelComprador=prompt("Ingrese el nombre del comprador");

		tipoDeJuego=prompt("Ingrese el tipo de juego");
		while(tipoDeJuego!="plataforma" && tipoDeJuego !="arcade" && tipoDeJuego !="online")
		{
			tipoDeJuego=prompt("¡! Reingrese el tipo de juego");
		}

		precioIngresado =parseFloat(prompt("Ingrese el precio de juego"));
		while(isNaN(precioIngresado) || precioIngresado < 1 )
		{
			precioIngresado =parseFloat(prompt("¡! Reingrese el precio de juego"));
		}

		switch(tipoDeJuego)
		{
			case "plataforma":
				if(compradorMasJovenPlataforma> edadPermitida || flagCompradorJoven == 0)
				{
					compradorMasJovenPlataforma= edadPermitida;
					nombreCompradorMasJovenPlataforma= nombreDelComprador;
					flagCompradorJoven=1;
				}
				PlataformaContadrorJuego++;

			break;
			case "arcade":
				arcadeContadorJuego++;
			break;
			case "online":
				onlineContadorJuego++;
			break;
		}

		if (cantidadIngresada ==4)
		{
			contadorJuegosVendidosCuatroJugadores++;
		}

		if(juegoMasCaro <precioIngresado || flagJuegoMascaro==0)
		{
			juegoMasCaro=precioIngresado;
			nombreJuegoMasCaro=nombreDelJuegoIngresado;
			flagJuegoMascaro=1;
		}

		acumuladorEdadesJugadores+= edadPermitida;
		contadorTotalJuegosVendidos++;

		acumuladorMontoRecaudadoBruto+= precioIngresado;

		respuesta=prompt("¿Desea continuar ingresando ventas?");
	}

	
	if (PlataformaContadrorJuego > arcadeContadorJuego && PlataformaContadrorJuego > onlineContadorJuego )
	{
		nombreTipoDeJuegoMasvendido=" Plataforma";
	}
	else
	{
		if(arcadeContadorJuego > onlineContadorJuego)
		{
			nombreTipoDeJuegoMasvendido =" Arcade";
		}
		else
		{
			nombreTipoDeJuegoMasvendido=" online";
		}
	}

	promedioEdades= acumuladorEdadesJugadores/ contadorTotalJuegosVendidos;
	promedioEdades= promedioEdades. toFixed();

	mensaje= "a)Nombre del comprador más joven que solo compró juegos de plataforma: "+ nombreCompradorMasJovenPlataforma
				+"<br>"+"b)Cantidad total de juegos vendidos que solo sean de 4 jugadores: "+ contadorJuegosVendidosCuatroJugadores
				+"<br>"+"c)Qué tipo de juego fue el más vendió:"+ nombreTipoDeJuegoMasvendido
				+"<br>"+"d)Nombre del juego más caro: "+ nombreJuegoMasCaro
				+"<br>"+"e)promedio de Edades de los compradores de juegos: "+ promedioEdades
				+"<br>"+"f)Monto total recaudado bruto de todos los Juegos (sin descuentos ni impuestos): $"+ acumuladorMontoRecaudadoBruto;

	document.write(mensaje);
}

/* Simulacro de examen
Nombre y apellido: Belen Soria
División: E
Parte: 2.

Enunciado:
Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.
function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var tipoIngresado;
	var pesoIngresado;
	var diagnosticoIngresado;
	var vacunacionAntirrabica;

	var respuesta="si";
	var mensaje;

	var mayorEdadVacuna;
	var nombreMayorEdadVacuna
	var flagDelPrimero=0;
	var flagMascotaJoven=0;

	var contadorMascotasConParasitosDigestivos=0;
	var gatoProblemasDigestivos=0;
	var perroProblemasDigestivos=0;
	var hamsterProblemasDigestivos=0;
	var tipoMaximoProblemasDigestivos;

	var mascotaMasJoven;
	var nombreMascotaJoven;
	var edadMascotaJoven;
	var diagnosticoMascotaJoven;

	var contadorPerroConOtitis=0;

	while(respuesta== "si")
	{
		nombreIngresado= prompt("Ingrese el nombre de la mascota:");

		edadIngresada=parseInt(prompt("Ingrese la edad de la mascota: (1-20)"));
		while(isNaN (edadIngresada) || edadIngresada < 1 || edadIngresada > 20 )
		{
			edadIngresada= parseInt(prompt("¡! Reingrese la edad de la mascota: (1-20) "));
		}
		
		tipoIngresado=prompt("Ingrese el tipo de mascota:");
		while(tipoIngresado !="gato" && tipoIngresado!="perro" && tipoIngresado !="hamster")
		{
			tipoIngresado=prompt("¡! Reingrese el tipo de mascota: gato/perro/hamster");
		}

		pesoIngresado=parseFloat(prompt("Ingrese el peso;"));
		while(isNaN (pesoIngresado) || pesoIngresado < 0 )
		{
			pesoIngresado= parseFloat(prompt("¡! Reingrese el peso: "));
		}

		diagnosticoIngresado = prompt("Ingrese el diagnostico: problemas digestivos/otitis/alergias en la piel/parasitos");
		while(diagnosticoIngresado !="problemas digestivos" && diagnosticoIngresado!="otitis" && diagnosticoIngresado!="alergias en la piel" && diagnosticoIngresado!="parasitos")
		{
			diagnosticoIngresado = prompt("¡! Ringrese el diagnostico: problemas digestivos/otitis/alergias en la piel/parasitos");
		}
		vacunacionAntirrabica= prompt("¿Posee vacunación antirrábica? si/no");
		while(vacunacionAntirrabica != "si" && vacunacionAntirrabica != "no")
		{
			vacunacionAntirrabica= prompt("¡¡!! ¿Posee vacunación antirrábica? si/no");
		}

		switch(vacunacionAntirrabica)
		{
			case "si":
				if(mayorEdadVacuna< edadIngresada || flagDelPrimero==0)
				{
					mayorEdadVacuna= edadIngresada;
					nombreMayorEdadVacuna= nombreIngresado;
				}
				flagDelPrimero=1;
			break;
			case "no":
				if (diagnosticoIngresado =="parasitos")
				{
					contadorMascotasConParasitosDigestivos++;
				}
			break;
		}
		if(mascotaMasJoven> edadIngresada || flagMascotaJoven==0)
		{
			mascotaMasJoven= edadIngresada;
			nombreMascotaJoven= nombreIngresado;
			edadMascotaJoven= edadIngresada;
			diagnosticoMascotaJoven = diagnosticoIngresado;
		}
		flagMascotaJoven=1;
		
		
		switch(diagnosticoIngresado)
		{
			case "problemas digestivos":
				switch(tipoIngresado)
				{
					case "gato":
						gatoProblemasDigestivos++;
					break;
					case "perro":
						perroProblemasDigestivos++; 
					break;
					case "hamster":
						hamsterProblemasDigestivos++;
					break;
				}
			break;
			case "otitis":
				contadorPerroConOtitis++;
			break;
		}

		respuesta=prompt("¿Desea continuar?");
	}

	if(gatoProblemasDigestivos> perroProblemasDigestivos && gatoProblemasDigestivos > hamsterProblemasDigestivos)
	{
		tipoMaximoProblemasDigestivos="Gatos";
	}
	else
	{
		if(perroProblemasDigestivos>hamsterProblemasDigestivos)
		{
			tipoMaximoProblemasDigestivos="Perros"
		}
		else
		{
			tipoMaximoProblemasDigestivos="Hamsters";
		}
	}
	
	mensaje="a) El nombre de la mascota más vieja con la vacuna antirrábica es "+ nombreMayorEdadVacuna+ " con "+ mayorEdadVacuna+" años. "
				+"<br>"+"b) La cantidad de mascotas sin vacuna antirrábica y con parásitos es de "+ contadorMascotasConParasitosDigestivos
				+"<br>"+"c) El tipo de mascota con más ingresos por problemas digestivos son "+tipoMaximoProblemasDigestivos
				+"<br>"+"d) Nombre, edad y diagnóstico de la mascota más joven ingresada: "
				+"<br>"+"	Nombre: "+nombreMascotaJoven
				+"<br>"+"	Edad: "+ edadMascotaJoven
				+"<br>"+"	Diagnostico:  "+ diagnosticoMascotaJoven
				+"<br>"+"e) La cantidad de perros ingresados por otitis: "+ contadorPerroConOtitis;
	document.write(mensaje);
}	*/

/* +"<br>"+"
Nombre y apellido: Belen Soria
Ej: E/S ejercicio n° 4

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'

function mostrar()
{
	// value significa la caja donde esta el valor
	var nombreIngresadoEj4;
	// guarda el nombre ingresado en un prompt
	nombreIngresadoEj4 = prompt("Ingresar su nombre");
	// document a la izquierda hace que muestre el valor ingresado
	document.getElementById("txtIdNombre").value =nombreIngresadoEj4;
	
}*/

