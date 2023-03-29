/*Nombre y apellido: Belen Soria
Div: E
Simulacro pre parcial.
+"<br>"+
 */
function mostrar()
{
	var nombreVendedor;
	var nombreComprador;
	var cantidadPasajes;
	var tipoAsiento;
	var tipoDeViaje;
	var tipoDeDestino;
	var contador=0;

	var pesosPepepeposo=0;
	var pesosQuinoto=0;
	var pesosHuesos=0;

	var porcentaje;

	while(contador<3)
	{
		nombreVendedor = prompt("Ingrese el nombre del vendedor: ");
		nombreVendedor=nombreVendedor.toLowerCase();
		while (nombreVendedor!="pepepeposo" && nombreVendedor != "quinoto" && nombreVendedor !="huesos")
		{
			nombreVendedor = prompt("¡! Reingrese el nombre del vendedor: ");
			nombreVendedor=nombreVendedor.toLowerCase();
		}

		nombreComprador=prompt("Ingrese el nombre del comprador: ");
		while(!isNaN(nombreComprador))
		{
			nombreComprador=prompt("¡!Reingrese el nombre del comprador: ");
		}

		cantidadPasajes=parseInt(prompt("Ingrese la cantidad de pasajes: "));
		while(cantidadPasajes > 5 || cantidadPasajes<1)
		{
			cantidadPasajes=parseInt(prompt("¡!Reingrese la cantidad de pasajes: "));
		}
		tipoAsiento=prompt("Ingrese el tipo de asiento: (economica/ejecutiva/primera");
		tipoAsiento=tipoAsiento.toLowerCase();
		while (tipoAsiento!="economica" && tipoAsiento != "ejecutiva" && tipoAsiento !="primera")
		{
			tipoAsiento = prompt("¡! Reingrese el nombre del vendedor: ");
			tipoAsiento=tipoAsiento.toLowerCase();
		}
		tipoDeViaje= prompt("Ingrese el tipo el viaje: directa/ escala");
		while (tipoViaje!="directa" && tipoDeViaje != "escala" )
		{
			tipoDeViaje = prompt("¡! Reingrese el tipo de vendedor: ");
		}
		tipoDeDestino=prompt("Ingrese el tipo de destino: nacional/internacional")
		while (tipoDeDestino!="nacional" && tipoDeDestino != "internacional" )
		{
			tipoDeDestino = prompt("¡! Reingrese el nombre del vendedor: ");
		}
		
		switch(tipoAsiento)
		{
			case "economica":

			break;
			case "ejecutiva":
				porcentaje=1.2;
			break;
			case "primera":
				porcentaje= 1.35;
			break;
		}
		switch(nombreVendedor)
		{
			case "pepepeposo":
				pesosPepepeposo+=10000;
			break;
			case "huesos":
				pesosHuesos+=10000;
			break;
			case "quinoto":
				pesosQuinoto+=10000;
			break;
		}

		contador++;
		console.log(contador);
	}
	mensaje= " a. A) El total de pesos recaudados de cada vendedor: "
				+"<br>"+ " Pepepeposo: "+ pesosPepepeposo
				+"<br>"+ " Quinoto: $"+ pesosQuinoto
				+"<br>"+ "Huesos: $"+ pesosHuesos;	
	document.write(mensaje);

}

/*
Nombre y apellido: Belen Soria
Ej: E/S ejercicio n° 2
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'
function mostrar()
{
	// creamos variable
	var ingresarNombre;
	// Pide ingresar el dato
	ingresarNombre = prompt("Ingrese su nombre ");
	// muestra el nombre en pantalla
	alert("El nombre ingresado es: " + ingresarNombre);

}*/

