/*Nombre y apellido: Belen Soria
Tema: while
Ej: N° 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("ingrese f ó m .");
	}
	// esto:
	// document.getElementById("txtIdSexo").value = sexoIngresado;
	// es igual a esto:
	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN