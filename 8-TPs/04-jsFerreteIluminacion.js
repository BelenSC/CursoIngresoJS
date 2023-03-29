/*4. Nombre y apellido: Belen Soria
Tema: IF-Switch 
TP: N° 04 (.2)

    Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
//  IF-IF tp 4.1
/*function CalcularPrecio () 
{
 	var cantidadLamparas;
    var precioLamparas;
    var precio
    var precioTotal;
    var precioFinal;
    var porcentajeDescuento;
    var precioADescontar;
    var mensaje;
    var marcaSeleccionada;
    var ingresosBrutos;

    precioLamparas = 35;
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaSeleccionada = document.getElementById("Marca").value;
    console.log(marcaSeleccionada);

    if(cantidadLamparas > 5)
    {
        porcentajeDescuento = 50;
    } //B 
    else
    {   
        if(cantidadLamparas == 5)
        {
            if(marcaSeleccionada == "ArgentinaLuz")
            {
                porcentajeDescuento = 40;
            }
            else
            {
                porcentajeDescuento = 30;
            }
        } // c 
        else
        {
            if(cantidadLamparas == 4)
            {
                if(marcaSeleccionada == "ArgentinaLuz" || marcaSeleccionada == "FelipeLamparas")
                {
                    porcentajeDescuento = 25;
                }
                else
                {
                    porcentajeDescuento = 20;
                }
            } //D
            else
            {
                if(cantidadLamparas == 3)
                {
                    if(marcaSeleccionada == "ArgentinaLuz")
                    {
                        porcentajeDescuento = 15;
                    }
                    else
                    {
                        if(marcaSeleccionada == "FelipeLamparas")
                        {
                            porcentajeDescuento = 10;
                        }
                        else
                        {
                            porcentajeDescuento = 5;
                        }
                    }
                }
            } 
            
        }
    }

    precioTotal = precioLamparas * cantidadLamparas;
    precioADescontar = precioTotal * porcentajeDescuento / 100;
    precioFinal = precioTotal - precioADescontar;
    
    if(precioFinal > 120)
    {
        ingresosBrutos = precioFinal * 10/100;
        precioFinal = precioFinal + ingresosBrutos;

        alert("Usted pagó $" + ingresosBrutos +" de IIBB.");
    }
    
    document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal;  

}*/

 //  IF-Switch TP 4.2
/*function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioLamparas;
    var precioTotal;
    var precioFinal;
    var porcentajeDescuento;
    var precioADescontar;
    var marcaSeleccionada;
    var ingresosBrutos;
 
    precioLamparas = 35;
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaSeleccionada = document.getElementById("Marca").value;
    porcentajeDescuento = 0;
    console.log(marcaSeleccionada);

    if(cantidadLamparas > 5)
    {
        porcentajeDescuento = 50;
    } //B 
    else
    {   
        if(cantidadLamparas == 5)
        {
            switch(marcaSeleccionada)
            {
                case "ArgentinaLuz":
                    porcentajeDescuento = 40;
                    break;
                default:
                    porcentajeDescuento = 30;
                    break;
            }
        } // c 
        else
        {
            if(cantidadLamparas == 4)
            {
                switch(marcaSeleccionada)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        porcentajeDescuento = 25;
                        break;
                    default:
                        porcentajeDescuento = 20;
                        break;
                }
            } //D
            else
            {
                if(cantidadLamparas == 3)
                {
                    switch(marcaSeleccionada)
                    {
                        case "ArgentinaLuz":
                            porcentajeDescuento = 15;
                            break; 
                        case "FelipeLamparas":
                            porcentajeDescuento = 10;
                            break;
                        default:
                            porcentajeDescuento = 5;
                            break;
                    }
                }
            } 
        }
    }
 
    precioTotal = precioLamparas * cantidadLamparas;
    precioADescontar = precioTotal * porcentajeDescuento / 100;
    precioFinal = precioTotal - precioADescontar;
     
    if(precioFinal > 120)
    {
        ingresosBrutos = precioFinal * 10/100;
        precioFinal = precioFinal + ingresosBrutos;
 
        alert("Usted pagó $" + ingresosBrutos +" de IIBB.");
    }
     
    document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal;  
 
}*/
// switch-switch TP 4.3
/*function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioLamparas = 35;
    var precioTotal;
    var precioFinal;
    var porcentajeDescuento;
    var precioADescontar;
    var marcaSeleccionada;
    var ingresosBrutos;
 
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaSeleccionada = document.getElementById("Marca").value;
 
    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            porcentajeDescuento = 0;
            break; 
        case 3:
            switch(marcaSeleccionada)
            {
                case "ArgentinaLuz":
                    porcentajeDescuento = 15;
                    break; 
                case "FelipeLamparas":
                    porcentajeDescuento = 10;
                    break;
                default:
                    porcentajeDescuento = 5;
                    break;
            }
            break;
        case 4:
            switch(marcaSeleccionada)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentajeDescuento = 25;
                    break;
                default:
                    porcentajeDescuento = 20;
                    break;
            }
            break;
        case 5:
            switch(marcaSeleccionada)
            {
                case "ArgentinaLuz":
                    porcentajeDescuento = 40;
                    break;
                default:
                    porcentajeDescuento = 30;
                    break;
            }
            break;
        default:
            porcentajeDescuento = 50;
            break;
    }
    
    precioTotal = precioLamparas * cantidadLamparas;
    precioADescontar = precioTotal * porcentajeDescuento / 100;
    precioFinal = precioTotal - precioADescontar;
     
    if(precioFinal > 120)
    {
        ingresosBrutos = precioFinal * 10/100;
        precioFinal = precioFinal + ingresosBrutos;
        alert("Usted pagó $" + ingresosBrutos +" de IIBB.");
    }
    document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal;  
}*/
// Switch-IF TP 4.4
function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioLamparas = 35;
    var precioTotal;
    var precioFinal;
    var porcentajeDescuento;
    var precioADescontar;
    var marcaSeleccionada;
    var ingresosBrutos;
 
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaSeleccionada = document.getElementById("Marca").value;
 
    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            porcentajeDescuento = 0;
        break; 
        case 3:
            if(marcaSeleccionada == "ArgentinaLuz")
            {
                porcentajeDescuento = 15;
            }
            else
            {
                if(marcaSeleccionada == "FelipeLamparas")
                {
                    porcentajeDescuento = 10;
                }
                else
                {
                    porcentajeDescuento = 5;
                }
            }
        break;
        case 4:
            if(marcaSeleccionada == "ArgentinaLuz" || marcaSeleccionada == "FelipeLamparas")
            {
                porcentajeDescuento = 25;
            }
            else
            {
                porcentajeDescuento = 20;
            }
        break;
        case 5:
            if(marcaSeleccionada == "ArgentinaLuz")
            {
                porcentajeDescuento = 40;
            }
            else
            {
                porcentajeDescuento = 30;
            }
        break;
        default:
            porcentajeDescuento = 50;
        break;
    }
    
    precioTotal = precioLamparas * cantidadLamparas;
    precioADescontar = precioTotal * porcentajeDescuento / 100;
    precioFinal = precioTotal - precioADescontar;
     
    if(precioFinal > 120)
    {
        ingresosBrutos = precioFinal * 10/100;
        precioFinal = precioFinal + ingresosBrutos;
        alert("Usted pagó $" + ingresosBrutos +" de IIBB.");
    }
    document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal;  
}