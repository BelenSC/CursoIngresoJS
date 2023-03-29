/* Parcial de ingreso
Nombre y apellido: Belen Soria
División: E
Parte: 1.

enunciado: Ejercicio 1

Aerolíneas Argentinas nos pide hacer una estadística de sus pasajeros a los distintos destinos que ofrece .
Para ellos se pide realizar una app.

Se debe ingresar por cada pasajero

-Nombre del Pasajero
-Destino(“Córdoba”, “Mendoza”, “Neuquén”, “Exterior”)
-Clase (“Ejecutiva”, “Primera”, “Turista”)
-Peso de equipaje de mano(hasta 25 kg inclusive)
-Apellido del Piloto (“Perez”, “Rodriguez”, “Fernandez”)

Se necesita saber

a)El nombre del piloto que llevó más pasajeros a Mendoza.
b)El equipaje más liviano.
c)El promedio de pasajeros que viajaron al Exterior.

NOTA: Deben poder ingresar todos números positivos, no se deben pueden ingresar números negativos.
*/
// =prompt("");
function mostrar()
{
	var nombreIngresado;
	var destinoIngresado;
	var claseIngresada;
	var pesoEquipajeingresado;
	var apellidoDelPiloto;
	
	var respuesta="si";
	var mensaje;

	var perezContadorMendoza=0;
	var rodriguezContadorMendoza=0;
	var fernandezContadorMendoza=0;
	var apellidoPilotoMasPasajerosMendoza;

	var equipajeMasLiviano;
	var flagEquipajeMasLiviano=0;

	var promedioPasajerosAlExterior;
	var contadorTotalPasajerosIngresados=0;
	var contadorPasajerosAlExterior=0;

	while(respuesta=="si")
	{
		nombreIngresado =prompt("Ingrese el nombre del pasajero");

		destinoIngresado =prompt("Ingrese el destino: cordoba/mendoza/neuquen/exterior");
		while(destinoIngresado!="cordoba" && destinoIngresado !="mendoza" && destinoIngresado !="neuquen" && destinoIngresado !="exterior")
		{
			destinoIngresado =prompt("¡!Reingrese el destino: cordoba/mendoza/neuquen/exterior");
		}

		claseIngresada =prompt("Ingrese la clase: ejecutiva/primera/turista");
		while(claseIngresada!="ejecutiva" && claseIngresada !="primera" && claseIngresada !="turista")
		{
			claseIngresada =prompt("¡!Reingrese la clase: ejecutiva/primera/turista");
		}

		pesoEquipajeingresado= parseFloat(prompt("Ingrese el peso del equipaje de mano: "));
		while(isNaN(pesoEquipajeingresado) || pesoEquipajeingresado < 1 || pesoEquipajeingresado > 25)
		{
			pesoEquipajeingresado= parseFloat(prompt("¡! Reingrese el peso del equipaje de mano: "));
		}

		apellidoDelPiloto=prompt("Ingrese el apellido del piloto: perez/ rodriguez/ fernandez");
		while(apellidoDelPiloto!="perez" && apellidoDelPiloto !="rodriguez" && apellidoDelPiloto !="fernandez")
		{
			apellidoDelPiloto =prompt("¡! Reingrese el apellido del piloto: perez/ rodriguez/ fernandez");
		}

		switch(apellidoDelPiloto)
		{
			case "fernandez":
				if (destinoIngresado =="mendoza")
				{
					fernandezContadorMendoza++;
				}
			
			break;
			case "perez":
				if (destinoIngresado =="mendoza")
				{
					perezContadorMendoza++;
				}
			break;
			case "rodriguez":
				if (destinoIngresado =="mendoza")
				{
					rodriguezContadorMendoza++;
				}
			break; 
		}

		if (equipajeMasLiviano > pesoEquipajeingresado || flagEquipajeMasLiviano == 0)
		{
			equipajeMasLiviano= pesoEquipajeingresado;
			flagEquipajeMasLiviano=1;
		}

		if( destinoIngresado=="exterior")
		{
			contadorPasajerosAlExterior++;
		}

		contadorTotalPasajerosIngresados++;
		respuesta=prompt("¿Desea ingresar más pasajeros?");
	}

	if (perezContadorMendoza > rodriguezContadorMendoza && perezContadorMendoza > fernandezContadorMendoza )
	{
		apellidoPilotoMasPasajerosMendoza=" Perez";
	}
	else
	{
		if(rodriguezContadorMendoza > fernandezContadorMendoza)
		{
			apellidoPilotoMasPasajerosMendoza ="Rodriguez";
		}
		else
		{
			apellidoPilotoMasPasajerosMendoza="Fernandez";
		}
	}

	promedioPasajerosAlExterior= contadorTotalPasajerosIngresados / contadorPasajerosAlExterior;
	
	mensaje= "a)El apellido del piloto que llevó más pasajeros a Mendoza: "+ apellidoPilotoMasPasajerosMendoza
				+"<br>"+"b)El equipaje más liviano pesa "+ equipajeMasLiviano+ " kg." 
				+"<br>"+"c)El promedio de pasajeros que viajaron al Exterior: "+ promedioPasajerosAlExterior;
			
	document.write(mensaje);
	

}

// +"<br>"+"


/* Simulacro de examen
Nombre y apellido: Belen Soria
División: E
Parte: 1.

Ejercicio 1

La Premier League de Inglaterra necesita un sistema capaz de reunir las estadísticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos. 
function mostrar()
{
	var nombreIngresado;
	var nacionalidadIngresada;
	var posicionIngresada;
	var cantidadTarjetasRojas;
	var golesIngresados;

	var respuesta="si";
	var mensaje;

	var maximoGoles;
	var nombreDelMaximoGoleador;
	var flagDelPrimero=0;

	var minimoDetarjetasRojas;
	var nombreMinimoTarjetasRojas;

	var contadorJugadoresIngresados=0;
	var contadorJugadoresIngleses=0;
	var porcentajeJugadorIngles;

	while(respuesta=="si")
	{
		nombreIngresado=prompt("Ingrese el nombre del jugador: ");
		nacionalidadIngresada=prompt("Ingrese la nacionalidad: ");

		posicionIngresada= (prompt("Ingrese la posición del jugador:"));
		posicionIngresada=posicionIngresada.toLowerCase();
		while(posicionIngresada!= "arquero" && posicionIngresada!= "defensor" && posicionIngresada!= "mediocampista" && posicionIngresada!= "delantero")
		{
			posicionIngresada= prompt("¡! Reingrese la posición del jugador:");
			posicionIngresada=posicionIngresada.toLowerCase();
		}

		cantidadTarjetasRojas= parseInt(prompt("Ingrese la cantidad de tarjetas rojas recibidas: "));
		while(isNaN (cantidadTarjetasRojas) || cantidadTarjetasRojas <-1)
		{
			cantidadTarjetasRojas= parseInt(prompt("¡! Reingrese la cantidad de tarjetas rojas recibidas: "));
		}

		golesIngresados=parseInt(prompt("Ingrese los goles del jugador: "));
		while(isNaN (golesIngresados) || golesIngresados < 1)
		{
			golesIngresados= parseInt(prompt("¡! Reingrese los goles del jugador: "));
		}

		// a
		if (maximoGoles< golesIngresados || flagDelPrimero == 0)
		{
			maximoGoles=golesIngresados;
			nombreDelMaximoGoleador= nombreIngresado;
			
		}

		switch(nacionalidadIngresada)
		{
			case "argentino":
				if(minimoDetarjetasRojas > cantidadTarjetasRojas || flagDelPrimero == 0)
				{
					minimoDetarjetasRojas = cantidadTarjetasRojas;
					nombreMinimoTarjetasRojas = nombreIngresado;
				}
			break;
			case "ingles":
				contadorJugadoresIngleses++;
			break;
		}
		flagDelPrimero =1;
		contadorJugadoresIngresados++;

		respuesta=prompt("¿Dese continuar?");
	}
	porcentajeJugadorIngles= (contadorJugadoresIngleses*100)/contadorJugadoresIngresados;

	mensaje= "a) El goleador del torneo es: " +nombreDelMaximoGoleador
			+"<br>"+ "b) El jugador Argentino con menos rojas recibidas es: "+nombreMinimoTarjetasRojas
			+"<br>"+ "c)El porcentaje de jugadores Ingleses de la liga es del % "+ porcentajeJugadorIngles;
	
	document.write(mensaje);

}


Nombre y apellido: Belen Soria
Ej: E/S ejercicio n° 3

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
function mostrar()
{
	var nombreIngresado;

	// Se obtiene el texto ingresado por la caja de texto en la variable nombreIngresado
	nombreIngresado = document.getElementById ("txtIdNombre").value;
	
	alert("El nombre ingresado es: " + nombreIngresado);

}*/


