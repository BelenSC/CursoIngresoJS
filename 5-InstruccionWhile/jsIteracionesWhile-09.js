/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero=0;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingresar un número:"));
		
		while(isNaN(numeroIngresado)) 
		{
			numeroIngresado = parseInt(prompt("Ingrese un número nuevamente:"));
		}
		
		if(numeroMaximo < numeroIngresado || banderaDelPrimero == 0)
		{
			numeroMaximo = numeroIngresado;
		}
		if(numeroMinimo > numeroIngresado || banderaDelPrimero == 0)
		{
			numeroMinimo = numeroIngresado; 
		}
		banderaDelPrimero=1;

		respuesta=prompt("¿Desea continuar?");	
	}

 	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}
/*	isNaN
		// es NO un numero
		// isNaN = es no un numero
		// no es un numero == true
		// no es un numero == false
		// si queremos que ingrese un texto, hayuqe negar la condicion
		// while(!isNaN(variable))
	ejemplo:
		while(isNaN(numeroIngresado)) // string== itera
	flags
		Inicializar en 0 o 1, false o true
		banderaDelPrimero="es el primero";
	=  	bandeaDelPrimero = 0;	

	comentarios profe: 
	alumno: Se puede usar: Math. min, Math.max?
	profe Esteban: tendriamos que usar banderas Miguel
	para no depender de una biblioteca
		se suele usar para max, min o talvez

*/

/* Parcial de ingreso
Nombre y apellido: Belen Soria
División: E
Parte: 1.*/

// +"<br>"+"