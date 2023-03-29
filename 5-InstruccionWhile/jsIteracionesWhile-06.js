/*Nombre y apellido: Belen Soria
Tema: while
Ej: N° 06 */
function mostrar()
{
// acumuladro y contador se inicializa en 0.
	var contador = 0;
	var acumulador = 0;
	var numeroIngresado;
	var suma;
	var promedio;

	while(contador <5)
	{
		numeroIngresado = parseInt(prompt("Ingrese un número: "));
		acumulador = acumulador + numeroIngresado;// guarda números para operar y los suma
		contador = contador + 1;//modifica la condición
		// contador++;
		// contador+1;
	}
	suma=acumulador;
	promedio = suma /5;
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador/5;
}//FIN DE LA FUNCIÓN