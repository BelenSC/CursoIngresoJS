/*
Nombre y apellido: Belen Soria
Ej: Instrucción IF ejercicio n° 09

Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al
10 inclusive.
*/
function mostrar()
{
		let numeroRandom;

	numeroRandom = Math.floor(Math.random() * 10 + 1);
	//Genero el número RANDOM entre 1 y 10 
	alert(numeroRandom);	

}