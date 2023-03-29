/*/*
Nombre y apellido: Belen Soria
parcial practica:2020
parte: 1

Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar
las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

Curso de ingreso UTN FRA */
function mostrar() {
	var tipoIngresado;
	var contador = 1;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;

	var banderaAlcohol = 0;
	var alcoholMinimo;
	var alcoholCantidadMinimo;
	var alcoholFabricanteMinimo;

	var tipoMaximo;
	var promedioDelMaximo;

	var cantidadJabon = 0;
	var cantidadBarbijo =0;
	var cantidadAlcohol=0;

	var contadorBarbijo=0;
	var contadorAlcohol=0;
	var contadorJabon=0;
	while (contador <= 5) 
	{
		tipoIngresado = prompt("Ingrese el producto de prevención de contagio n° " + contador);
		tipoIngresado = tipoIngresado.toLowerCase();
		while (tipoIngresado != "barbijo" && tipoIngresado != "jabón" && tipoIngresado != "alcohol")
		{
			tipoIngresado = prompt("!!!Reingrese el tipo de producto n° " + contador);
			tipoIngresado = tipoIngresado.toLowerCase();
		}
		console.log(contador);

		precioIngresado = parseFloat(prompt("Ingrese el precio"));
		while (isNaN(precioIngresado) || precioIngresado < 99 || precioIngresado > 300)
		{
			precioIngresado = parseFloat(prompt("!Reingrese el precio"));
		}

		cantidadIngresada = parseInt(prompt("Ingrese la cantidad:"));
		while (isNaN(cantidadIngresada) || cantidadIngresada < 1 || cantidadIngresada > 1000)
		{
			cantidadIngresada = parseInt(prompt("!Reingrese la cantidad"));
		}

		marcaIngresada = prompt("Ingrese la marca");
		fabricanteIngresado = prompt("Ingrese el fabricante");

		switch (tipoIngresado)
		{
			case "alcohol":
				if (alcoholMinimo > precioIngresado || banderaAlcohol == 0)
				{
					alcoholMinimo = precioIngresado;
					alcoholCantidadMinimo = cantidadIngresada;
					alcoholFabricanteMinimo = fabricanteIngresado;
					banderaAlcohol = 1;
				}
				cantidadAlcohol = cantidadAlcohol + cantidadIngresada;
				contadorAlcohol++;
			break;
			case "jabón":
				cantidadJabon = cantidadIngresada + cantidadJabon;
				mensaje = "Hay " + cantidadJabon + " en total.";
				contadorJabon++;
			break;
			case "barbijo":
				cantidadBarbijo = cantidadBarbijo + cantidadIngresada;
				contadorBarbijo++;
			break;
		}
		contador++;
	}

	if (cantidadAlcohol > cantidadJabon && cantidadAlcohol > cantidadBarbijo) 
	{
		promedioDelMaximo = cantidadAlcohol / contadorAlcohol;
		tipoMaximo = " Alcohol";
	}
	else 
	{
		if (cantidadBarbijo > cantidadJabon) {
			promedioDelMaximo = cantidadBarbijo / contadorBarbijo
			tipoMaximo = " Barbijo.";
		}
		else 
		{
			promedioDelMaximo = cantidadJabon / contadorJabon;
			tipoMaximo = " Jabón";
		}
	}

	console.log("El alcohol más barato es de fabricante: " + alcoholFabricanteMinimo + ", con " + alcoholCantidadMinimo + " unidades.");
	console.log("El promedio por compra de" + tipoMaximo + " es de " + promedioDelMaximo);
	console.log(mensaje);
}


