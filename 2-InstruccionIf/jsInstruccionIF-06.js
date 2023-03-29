/* 
Nombre y apellido: Belen Soria
Ej: Instrucción IF ejercicio n° 06

Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad
(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	var edadIngresada;

	// Toma el valor via caja de texto y lo parsea
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	// Evalua la condición
	if(edadIngresada < 18 && edadIngresada > 12) 
	{
		alert("Usted es adolescente.");
	}
	else 
	{
		if(edadIngresada > 17) 
		{
			alert("Usted es mayor de edad.");
		}
		else
		{
			alert("Usted es niño.");
		}
	}

}
/* PRACTICA 
Al ingresar una edad debemos 
informar si la persona es anciano(mayor a 70), si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años)
function mostrar()
{
	var edadIngresada;
	// declara vairable mensaje para no poner multiples alert
	var mensaje;
	// Toma el valor via caja de texto y lo parsea
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	// Evalua la condición, empezar por el mayor para descartar
	
	if(edadIngresada > 70)
	{
		mensaje = "Usted es anciano.";
	}
	else
	{
		if(edadIngresada > 17) 
		{
			mensaje = "Usted es mayor de edad.";
		}
		else 
		{
			if(edadIngresada > 12) 
			{
				mensaje = "Usted es adolescente.";
			}
			else
			{
				mensaje ="Ustede es un niño.";
			
			}
		}
	}
	// muestra el mensaje
	alert(mensaje);
}*/