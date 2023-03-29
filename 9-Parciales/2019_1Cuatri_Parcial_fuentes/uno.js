/*Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero 
por prompt y que muestre el perímetro por alert. */
function mostrar()
{
    var longitudIngresada;
    var perimetroObtenido;

    longitudIngresada= parseFloat(prompt("Ingrese la longitud para calcular el perimetro de un triangulo equilátero:"));
    perimetroObtenido=3*longitudIngresada;
    alert("el perimetro es igual a :"+ perimetroObtenido);
}
