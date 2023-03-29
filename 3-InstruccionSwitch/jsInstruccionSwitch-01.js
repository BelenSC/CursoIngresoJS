/*Nombre y apellido: Belen Soria
Ej: Switch ejercicio n° 01
1. al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño = document.getElementById("txtIdMes").value;
	var mensaje;

	switch(mesDelAño) 
	{
		case "Enero":
			mensaje = "¡¡Qué comiencen bien el año!!";
			break;
	
		case "Marzo": 
			mensaje ="¡¡¡A clases!!!";
			break;
		case "Julio": 
			mensaje = "¡¡¡Se vienen las vacaciones!!!";
			break;
		case "Diciembre": 
			mensaje ="¡¡¡Felices fiestas!!!";
			break;
	}
	alert(mensaje);
}