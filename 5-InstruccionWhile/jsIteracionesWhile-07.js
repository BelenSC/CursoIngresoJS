/*Nombre y apellido: Belen Soria
Tema: while
Ej: N° 07
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var respuesta;
	var numeroIngresado;
	var promedio; 

	respuesta= "si" ;

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un número: "));
		acumulador = acumulador + numeroIngresado;// guarda números para operar y los suma
		// o se puede escribir como contador: 
		// acumulador+=numeroIngresado;
		// variable que cambia la condición
		contador++;
		respuesta = prompt("¿Desea ingresar más números? si/no");
		// la respuesta lo convierte en minuscula:
		respuesta= respuesta.toLowerCase();
	}
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = "La suma es: " + acumulador;
	document.getElementById("txtIdPromedio").value= "El promedio es: "+ promedio;

}//FIN DE LA FUNCIÓN