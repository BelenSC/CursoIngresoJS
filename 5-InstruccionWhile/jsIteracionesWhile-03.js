/*
Nombre y apellido: Belen Soria
Tema: while
Ej: N° 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("Ingrese la clave.");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Reingrese la clave.");            
	}
	
	alert ("Bienvenido.");

} 
