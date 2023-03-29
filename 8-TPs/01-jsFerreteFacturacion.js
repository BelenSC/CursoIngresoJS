/*
Nombre y apellido: Belen Soria
TP:  n° 1
Parte: 
1.	Para el departamento de facturación:
    A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
    B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
    C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    // Se obtiene los valores por la caja de texto
    precioUno = document.getElementById ("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    // Pasa los valores a números
    precioUno = parseFloat (precioUno);
    precioDos = parseFloat (precioDos);
    precioTres = parseFloat(precioTres);

    // Suma los precios
    suma = precioUno + precioDos + precioTres;

    alert ("El total de los precios es: " + suma);
}

function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var promedio;

     // Se obtiene los valores por la caja de texto
    precioUno = document.getElementById ("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    // Pasa los valores a números
    precioUno = parseFloat (precioUno);
    precioDos = parseFloat (precioDos);
    precioTres = parseFloat(precioTres);

    // suma los precios
    suma = precioUno + precioDos + precioTres;

    //realiza el promedio 
    promedio = suma / 3;

    alert ("El promedio de los precios ingresados es : " + promedio);
}

function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var ivaObtenido;
    var precioFinal;

    // Se obtiene los valores por la caja de texto
    precioUno = document.getElementById ("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    // Pasa los valores a números
    precioUno = parseFloat (precioUno);
    precioDos = parseFloat (precioDos);
    precioTres = parseFloat (precioTres);

    // Suma los precios
    suma = precioUno + precioDos + precioTres;

    // Calcula el IVA 21%
    ivaObtenido = suma *21/100;

    // Total de la suma y el IVA
    precioFinal = suma + ivaObtenido;

    alert ("El precio final más IVA 21% es : " + precioFinal);
}