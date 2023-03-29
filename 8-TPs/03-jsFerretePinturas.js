/* Nombre y apellido: Belen Soria
TP:  n°
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaIngresada;
    var centígradosSolicitado;
    
    //Guarda los datos ingresados de la caja de texto en la variable
    temperaturaIngresada = document.getElementById("txtIdTemperatura").value;

    // Parsea
    temperaturaIngresada = parseFloat(temperaturaIngresada);

    // Hace el calculo
    centígradosSolicitado = (temperaturaIngresada - 32) * 5 /9;

    // Muestra en pantalla
    alert( "Los " + temperaturaIngresada + "° fahrenheit ingresados son " + centígradosSolicitado + "° centigrados.");

}

function CentigradosFahrenheit () 
{
	var temperaturaIngresada;
    var fahrenheitSolicitado;

    //Guarda los datos ingresados de la caja de texto en la variable
    temperaturaIngresada = document.getElementById("txtIdTemperatura").value;

    // Parsea
    temperaturaIngresada = parseFloat(temperaturaIngresada);

    // Hace el calculo
    fahrenheitSolicitado = (temperaturaIngresada *9/5) + 32;

    // Muestra en pantalla
    alert( "Los " + temperaturaIngresada + "° centigrados ingresados son " + fahrenheitSolicitado + "° fahrenheit. ");

}

