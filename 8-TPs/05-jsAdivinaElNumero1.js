/*Nombre y apellido: Belen Soria
Tema: Switch 
TP: 5
1. Adivina el número (v 1.0): 
Al comenzar el juego generamos un número secreto del 1 al 100, en la pantalla del 
juego dispondremos de un cuadro de texto para ingresar un número y un botón “Verificar”,
si el número ingresado es el mismo que el número secreto se dará por terminado el
juego con un mensaje similar a este:
“Usted es un ganador!!! y en solo X intentos”. de no ser igual se debe informar si
“falta…” para llegar al número secreto o si “se pasó…” del número secreto.
*/ 
var numeroSecreto;
var contadorIntentos;
var numeroIngresado;

function comenzar()
{
    //Genero el número RANDOM entre 1 y 100
    numeroSecreto = Math.floor(Math.random()* 100 + 1);
    console.log(numeroSecreto);

//alert(numeroSecreto );
}

function verificar()
{
	numeroIngresado = document.getElementById("txtIdNumero").value;

    if(numeroSecreto == numeroIngresado)
    {
        alert("¡¡¡Usted es un ganador!!! y en solo "+ X + " intentos")
    }

}