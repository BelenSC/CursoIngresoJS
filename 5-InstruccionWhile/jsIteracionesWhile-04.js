/*
Nombre y apellido: Belen Soria
Tema: while
Ej: N° 04
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	// otro forma de hacerlo, negar la condicion verdadera: 
	// while(!(numeroIngresado >= 0 && numeroIngresado <= 9))
	while(numeroIngresado < 0 || numeroIngresado > 9 )
	{
		numeroIngresado = parseInt(prompt("Ingrese un número entre 0 y 9."));	
	}

	document.getElementById("txtIdNumero").value = "El número validado es: " + numeroIngresado;

	
}//FIN DE LA FUNCIÓN
