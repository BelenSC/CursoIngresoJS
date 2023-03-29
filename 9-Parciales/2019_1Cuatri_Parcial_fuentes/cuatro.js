/*A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:

nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano?
paga con mercado , tarjeta o efectivo
 */
function mostrar()
{
    var nombreIngresado;
    var lugarIngresado;
    var temporadaingresada;
    var cantidadDiasIngresados;
    var importeIngresado;
    var alturaIngresada;
    var pesoPasajeroIngresado;
    var sexoIngresado;
    var equipajeDeManoIngresado;
    var metodoDePago;

    var respuesta="si;"

    var temporadaAlta=0;
    var temporadaBaja=0;

    var pesoAcumulado=0;
    var gesselDiasAcumulados=0;
    var cordobaDiasAcumulados=0;
    var madrynDiasAcumulados=0;
    var maximoDiasAcumulados;
    var sumaImporteIngresado=0;

    var flagDelPrimero=0;
    var maximoPeso;
    var minimoPeso;
    var nombrePesoMinimo;
    var nombrePesoMaximo;

    var mayorImporte;
    var lugarMayorImporte;

    var alturaMaxima;
    var nombreMujerAlta;
    
    var contadorEfectivo=0;
    var contadorMercado=0;
    var contadorTarjeta=0;

    var contadorGessel=0;
    var contadorMadryn=0;
    var contadorCordoba=0;

    var metodoMasUtilizado;
    var lugarMayorPasajeros;
    var temporadaMayorViajes;

    var acumuladorConEquipaje=0;
    var acumuladorViajes=0;
    var porcentajeConEquipaje;

    var contadorFemenimo=0;
    var contadorMasculino=0;
    var contadorNoBinario=0;
    var porcentajeFemenino;
    var porcentajeMasculino;
    var porcentajeNoBinario;

    while(respuesta=="si")
    {
        nombreIngresado=prompt("Ingrese el nombre del titular");
        lugarIngresado= prompt("Ingrese el lugar de vacaciones");
        while(lugarIngresado !="puerto madryn" && lugarIngresado!="Villa gessel" && lugarIngresado!="Cordoba")
        {
            lugarIngresado=prompt("¡! Reingrese el lugar de vacaciones");
        }
        temporadaingresada=prompt("Ingrese la temporada: alta/baja");
        while(temporadaingresada != "alta" && temporadaingresada !="baja")
        {
            temporadaingresada=prompt("Ingrese la temporada: alta/baja");
        }
        cantidadDiasIngresados= parseInt(prompt("Ingrese la cantidad de dias del viaje: "));

        importeIngresado = parseFloat(prompt("Ingrese el importe del viaje:"));
        sumaImporteIngresado+=importeIngresado;

        alturaIngresada = parseFloat(prompt("Ingrese la altura del pasajero:"));

        pesoPasajeroIngresado = parseFloat(prompt("Ingrese el peso del psajero:"));

        sexoIngresado = prompt("Ingrese el sexo del pasajero: f/m/nb");
        while(sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado !="nb")
		{
			sexoIngresado=prompt("¡! Reingrese el sexo: (f/m/nb)");
		}
        equipajeDeManoIngresado=prompt("¿Viaja con equipaje de mano?: si/no");

        metodoDePago=prompt("¿Paga con mercado, tarjeta o efectivo?");
        while(metodoDePago!="mercado" && metodoDePago!="tarjeta" && metodoDePago!="efectivo")
        {
            metodoDePago=prompt("¡! Reingrese el metodo de pago, ¿mercado, tarjeta o efectivo?");
        }

        switch(temporadaingresada)
        {
            case "alta":
                temporadaAlta++;
            break;
            case "baja":
                temporadaBaja++;
            break;
        }

        switch(lugarIngresado)
        {
            case "Villa gessel":
                pesoAcumulado+=pesoPasajeroIngresado;
                gesselDiasAcumulados+=cantidadDiasIngresados;
                contadorGessel++;
            break;
            case "Cordoba":
                cordobaDiasAcumulados+=cantidadDiasIngresados;
                contadorCordoba++;
            break;
            case "puerto madryn":
                madrynDiasAcumulados+= cantidadDiasIngresados;
                contadorMadryn++;
            break;
        }

        if(minimoPeso>pesoPasajeroIngresado || flagDelPrimero == 0)
        {
            minimoPeso=pesoPasajeroIngresado;
            nombrePesoMinimo=nombreIngresado;
        }
        if(maximoPeso< pesoPasajeroIngresado || flagDelPrimero==0)
        {
            maximoPeso= pesoPasajeroIngresado;
            nombrePesoMaximo=nombreIngresado;
        }
        if(mayorImporte < importeIngresado || flagDelPrimero ==0)
        {
            mayorImporte= importeIngresado;
            lugarMayorImporte= lugarIngresado;
        }
        switch(sexoIngresado)
        {
            case "f":
                if(alturaMaxima< alturaIngresada || flagDelPrimero==0)
                {
                    alturaMaxima=alturaIngresada;
                    nombreMujerAlta= nombreIngresado;
                }
                contadorFemenimo++;
            break;
            case "m":
                contadorMasculino++;
            break;
            case "nb":
                contadorNoBinario++;
            break;
        }
       
        flagDelPrimero=1;
        switch(metodoDePago)
        {
            case "efectivo":
                contadorEfectivo++;
            break;
            case "mercado":
                contadorMercado++;
            break;
            case "tarjeta":
                contadorTarjeta++;
            break;
        }
        if(equipajeDeManoIngresado=="si")
        {
            acumuladorConEquipaje++;
        }
        acumuladorViajes++;
        
        respuesta= prompt("¿Desea continuar?");
    }

    if(gesselDiasAcumulados>cordobaDiasAcumulados && gesselDiasAcumulados> madrynDiasAcumulados)
    {
        maximoDiasAcumulados="Villa Gessel";
    }
    else
    {
        if(cordobaDiasAcumulados>madrynDiasAcumulados)
        {
            maximoDiasAcumulados="Córdoba";
        }
        else
        {
            maximoDiasAcumulados="Puerto Madryn"
        }
    }

    if(contadorEfectivo> contadorMercado && contadorEfectivo > contadorTarjeta)
    {
        metodoMasUtilizado="Efectivo";
    }
    else
    {
        if(contadorMercado>contadorTarjeta)
        {
            metodoMasUtilizado= "Mercado";
        }
        else
        {
            metodoMasUtilizado="Tarjeta";
        }
    }
    if(temporadaAlta>temporadaBaja)
    {
        temporadaMayorViajes="Alta";
    }
    else
    {
        temporadaMayorViajes="Baja";
    }

    if(contadorCordoba> contadorGessel && contadorCordoba> contadorMadryn)
    {
        lugarMayorPasajeros="Córdoba";
    }
    else
    {
        if(contadorGessel> contadorMadryn)
        {
            lugarMayorPasajeros="Villa Gessel";
        }
        else
        {
            lugarMayorPasajeros="Puerto Madryn";
        }
    }

    porcentajeConEquipaje= (acumuladorConEquipaje*100)/acumuladorViajes;
    porcentajeFemenino = (contadorFemenimo*100)/acumuladorViajes;
    porcentajeMasculino = (contadorFemenimo*100)/acumuladorViajes;
    porcentajeNoBinario = (contadorFemenimo*100)/acumuladorViajes;



    mensaje="a- cantidad de personas que viajan en cada temporada alta: "+ temporadaAlta+ " y baja: "+temporadaBaja
                +"<br>"+ " b- el peso acumulado de todos los que viajan a villa gessel: "+pesoAcumulado+" kg."
                +"<br>"+ "c- el lugar con la mayor cantidad de días acumulados: "+ maximoDiasAcumulados
                +"<br>"+ "d- la suma de todos los importes: $"+ sumaImporteIngresado
                
                 +"<br>"+ "2"
                +"<br>"+ "e-el nombre del más pesado de los pasajeros es "+nombrePesoMaximo+" y el del más liviano es "+nombrePesoMinimo
                +"<br>"+ "f-el lugar donde se pagó el mayor importe: "+ lugarMayorImporte
                +"<br>"+ "g-el nombre de la mujer más alta: "+ nombreMujerAlta
                
                +"<br>"+ "3"
                +"<br>"+ "h- Cuál fue la forma de pago más utilizada"+metodoMasUtilizado
                +"<br>"+ "i- en qué temporada se viajó más"+ temporadaMayorViajes
                +"<br>"+ "j- qué lugar tuvo más pasajeros"+ lugarMayorPasajeros
                
                +"<br>"+ "4"
                +"<br>"+ " k- qué porcentaje usa equipaje de mano: %"+porcentajeConEquipaje
                +"<br>"+ "l- que porcentaje hay de cada sexo:"+
                +"<br>"+ "No binario: %"+porcentajeNoBinario
                +"<br>"+"Masculino: %"+porcentajeMasculino
                +"<br>"+"femenino : %"+ porcentajeFemenino;
    
}
