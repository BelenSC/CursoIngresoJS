/* Nombre y apellido: Belen Soria
práctica: parcial 2020
parte: 3

Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaIngresada;

	var respuesta="si";
	var mensaje;

	var flagTemperatura=0;
	var temperaturaMaxima;
	var nombreTemperaturaMaxima;

	var contadorViudos=0;
	var HombresNoCasados=0;
	var contadorTemperatura=0;

	var acumuladorEdadSolteros=0;
	var contadorSolteros=0;
	
	var i=0;
	while(respuesta=="si")
	{
		nombreIngresado= prompt("Ingrese el nombre del pasajero:");
		edadIngresada=parseInt(prompt("Ingrese la edad:"));

		sexoIngresado=prompt("Ingrese el sexo: (f/m)");
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("¡! Reingrese el sexo: (f/m)");
		}

		estadoCivilIngresado=prompt("Ingrese el estado civil: ");
		while(estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado=prompt("¡! Reingrese el estado civil: ");
		}
		temperaturaIngresada=prompt("Ingrese la temperatura corporal: ");

		if(temperaturaMaxima< temperaturaIngresada || flagTemperatura == 0)
		{
			temperaturaMaxima=temperaturaIngresada;
			nombreTemperaturaMaxima= nombreIngresado;
			flagTemperatura=1;
		}
		
		switch(estadoCivilIngresado)
		{
			case "viudo":
				if (edadIngresada> 17)
				{
					contadorViudos++;
				}
			break;
			case "soltero":
				if(sexoIngresado=="m")
				{
					acumuladorEdadSolteros+=edadIngresada;
					contadorSolteros++;
				}
			break;
		}

		if(sexoIngresado=="m")
		{
			if(estadoCivilIngresado=="soltero" || estadoCivilIngresado=="viudo")
			{
				HombresNoCasados++;
			}
		}

		if(edadIngresada>=60)
		{
			if(temperaturaIngresada>=38)
			{
				contadorTemperatura++;
			}
		}
		
		respuesta=prompt("¿Desea continuar?");
		i++;
		console.log(i);
	}

	mensaje= " a. El nombre de la persona con mas temperatura es: "+ nombreTemperaturaMaxima+" con "+temperaturaMaxima+"° de temperatura"
				+"<br>"+ " b. Mayores de edad viudos: "+ contadorViudos
				+"<br>"+ " c. La cantidad de hombres que hay solteros o viudos:"+ HombresNoCasados
				+"<br>"+ "d. cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura: "+contadorTemperatura 
				+"<br>"+"e. El promedio de edad entre los hombres solteros:"+ acumuladorEdadSolteros/contadorSolteros;
	document.write(mensaje);
}
