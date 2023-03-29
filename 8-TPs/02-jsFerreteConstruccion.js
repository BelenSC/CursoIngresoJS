/*
Nombre y apellido: Belen Soria
TP:  n° 2

2.Para el departamento de Construcción:
    A.	Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
    B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambrar con tres hilos de alambre.
    C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()
{
    var largoTerreno;
    var anchoTerreno;
    var perimetroObtenido;
    var cantidadAlambre;

    // Obtiene los valores de la caja de texto
    largoTerreno = document.getElementById ("txtIdLargo").value;
    anchoTerreno = document.getElementById ("txtIdAncho").value;

    // Parsea
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    // Calcula el perimetro
    perimetroObtenido = (largoTerreno + anchoTerreno)*2;
    console.log(perimetroObtenido);

    perimetroIbtenido = (anchoTerreno * 2) + (largoTerreno * 2);
    console.log(perimetroObtenido);
    
    cantidadAlambre = perimetroObtenido *3;

    // Muestra en pantalla el mensaje
    alert("La cantidad de alambre a comprar, según las longitudes ingresadas, es: " + cantidadAlambre + " mts.");

}

function Circulo () 
{
    var radioIngresado;
    var perimetroObtenido;
    var cantidadAlambre;

    // Obtiene los valores de la caja de texto
    radioIngresado = document.getElementById ("txtIdRadio").value;

    // Parsea
    radioIngresado = parseFloat(radioIngresado);

    // Calcula el perimetro
    perimetroObtenido =  13.14 *2 * radioIngresado;

    cantidadAlambre = perimetroObtenido *3;

    // Muestra en pantalla el mensaje
    alert("La cantidad total de alambre a comprar, según el radio ingresado, es: " + cantidadAlambre + " mts.");
}
function Materiales () 
{
	var largoTerreno;
    var anchoTerreno;
    var metrosCuadrados;
    var bolsasCal;
    var bolsasCemento;

    // Obtiene los valores de la caja de texto
    largoTerreno = document.getElementById ("txtIdLargo").value;
    anchoTerreno = document.getElementById ("txtIdAncho").value;

    // Parsea
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    // Calcula los metros cuadrados
    metrosCuadrados = largoTerreno * anchoTerreno;

    // Calcula la cantidad de bolsas
    bolsasCal = metrosCuadrados * 3;
    bolsasCemento = metrosCuadrados * 2;

    // Muestra en pantalla el mensaje
    alert("Para un contraapiso de " + metrosCuadrados + " m2 del terreno, se requiere  " + bolsasCal + " bolsas de cal y " + bolsasCemento + " bolsas de cemento.");

}

/* Ejemplo en clase:  Fran.
function Rectangulo() {

    var largoIngresado;
    var anchoIngresado;
    var perimetro;
    var cantidadAlambre;
    var mensaje;

    largoIngresado = document.getElementById("txtIdLargo").value;
    anchoIngresado = document.getElementById("txtIdAncho").value;

    largoIngresado = parseFloat(largoIngresado);
    anchoIngresado = parseFloat(anchoIngresado);

    perimetro = (anchoIngresado + largoIngresado) * 2;
    console.log(perimetro);

    perimetro = (anchoIngresado * 2) + (largoIngresado * 2);
    console.log(perimetro);

    cantidadAlambre = perimetro * 3;

    mensaje = "La cantidad de alambre que tenes que comprar acorde a tu terreno es: " + cantidadAlambre;

    alert(mensaje);


}*/
 
    // B.	mostrar la cantidad de alambre a comprar  si se ingresara el radiode un terreno circular y se debe alambra con tres hilos de alambre.
 
/*function Circulo () 

{
    var radioTerreno;
    var perimetro;
    var cantidadAlambre;
    

    radioTerreno = document.getElementById("txtIdRadio").value;

    radioTerreno = parseFloat(radioTerreno);
    
    perimetro = 2 * 3.14 * radioTerreno;


    cantidadAlambre = perimetro * 3;

    alert("La cantidad de metros de alambre necesarios para tu terreno es: " + cantidadAlambre + "mts");
} */
        
/* Nico ejemplo 3
 function Materiales () 
{
	var medidaLargo;
    var medidaAncho;
    var resultado;
    var bolsasCemento;
    var bolsasCal;


    medidaLargo = document.getElementById("txtIdLargo").value;
    medidaAncho = document.getElementById("txtIdAncho").value;

    medidaLargo = parseFloat(medidaLargo);
    medidaAncho = parseFloat(medidaAncho);

    resultado = medidaLargo * medidaAncho;

    bolsasCemento = resultado *2;
    bolsasCal = resultado *3;
    
    alert(`Para un contrapiso de ${resultado}, se necesitan ${bolsasCemento} bolsas de cemento y ${bolsasCal} bolsas de cal`);
}*/