/* Parcial de ingreso
Nombre y apellido: Belen Soria
División: E
Parte: 1.

2. Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base a las ventas de sus productos
(No se sabe cuántos).
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
El más barato de los libros de drama con su importe.
Qué porcentaje de cada género se vendió.
Informar el título del primer libro de drama que se vendió.
*/


function mostrar()
{
	var tituloIngresado;
	var generoIngresado;
	var materialIngresado;
	var importeIDelLibroIngresado;
	
	var libroMasBaratoDeDrama;
	var nombreLibroMasBaratoDrama;

	var cienciaFiccionPorcentaje;
	var dramaPorcentaje;
	var terrorPorcentaje;

	var primerLibroDeDrama;
	var flagPrimeroLibroDeDrama=0;


	var respuesta ="si";
	while(respuesta=="si")
	{
		tituloIngresado =prompt("Ingrese el n¿titulo del libro");

		generoIngresado =prompt("Ingrese el género del libro: ciencia ficcion/ drama/terror");
		while(generoIngresado !="ciencia ficcion" && generoIngresado !="drama" && generoIngresado !="terror")
		{	
			generoIngresado =prompt("¡!Reingrese el género del libro: ciencia ficcion/ drama/terror");
		}

		materialIngresado =prompt("Ingrese el material del libro: rustica/ tapa dura");
		while(materialIngresado !="rustica" && generoIngresado !="tapa dura" )
		{	
			materialIngresado =prompt(" ¡! Reingrese el material del libro: rustica/ tapa dura");
		}

		importeIDelLibroIngresado= parseFloat(prompt("Ingrese el importe"));
		while(importeIDelLibroIngresado < 1 || importeIDelLibroIngresado > 30000)
		{
			importeIDelLibroIngresado= parseFloat(prompt("¡!Reingrese el importe"));
		}

		switch(generoIngresado)
		{
			case "ciencia ficcion":
			break;
			case "drama":
				if(flagPrimeroLibroDeDrama==0)
				{
					primerLibroDeDrama = tituloIngresado;
				}
				if(libroMasBaratoDeDrama < importeIDelLibroIngresado || flagPrimeroLibroDeDrama==0)
				{
					libroMasBaratoDeDrama = importeIDelLibroIngresado;
					nombreLibroMasBaratoDrama = tituloIngresado;
				}
				flagPrimeroLibroDeDrama=1;
			break;
			case "terror":
			break;
		}

		respuesta=prompt("¿Desea continuar?");
	}


	mensaje= "El más barato de los libros de drama: "+ nombreLibroMasBaratoDrama+" con su importe: "+ libroMasBaratoDeDrama
					+"<br>"+"Qué porcentaje de cada género se vendió. "+
				+"<br>"+"Informar el título del primer libro de drama que se vendió "+ primerLibroDeDrama;
}

// +"<br>"+"

/*Nombre y apellido: Belen Soria
Tema: while
Ej: N° 01
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
function mostrar()
{
	var contador = 0;
	var acumulador = 0;

	while(contador <10)
	{
		// muestra el número por crossOriginIsolated
		console.log(acumulador+1);
		// le suman 1
		acumulador = acumulador+1;
		// contador para numerar la cantidad de bucles.
		contador++;
	}
}*/