/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     let precioLampara = 35;
     
     let cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);

     let marcaLampara = document.getElementById("Marca").value;

     let descuento = 0;

     let porcentajeDescuento = 0;

     let precioFinal;

     let iibb = 0; // IIBB 10%  en el ejercicio

// A
     if (cantidadLamparas >= 6){   // Aca entran todas las marcas por igual

          porcentajeDescuento = 50;
     }
// B
     else if (cantidadLamparas == 5){
          if(marcaLampara == "ArgentinaLuz"){
               porcentajeDescuento = 40;
          }
          else{     // Aca el resto de las marcas: "FelipeLamparas", "JeLuz", "HazIluminacion" y "Osram" 
          porcentajeDescuento = 30;
          }
     }
// C    
     else if (cantidadLamparas == 4){
          if(marcaLampara == "ArgentinaLuz" || marcaLampara =="FelipeLamparas"){
               porcentajeDescuento = 25;
          }
          else{     // Aca el resto de las marcas: "JeLuz", "HazIluminacion" y "Osram"
          porcentajeDescuento = 20;
          }
     }
// D
     else if (cantidadLamparas == 3){
          if(marcaLampara == "ArgentinaLuz"){
               porcentajeDescuento = 15; 
          }
          else if(marcaLampara == "FelipeLamparas"){
               porcentajeDescuento = 10;
          }
          else{     // Aca el resto de las marcas: "JeLuz", "HazIluminacion" y "Osram"
          porcentajeDescuento = 5;
          }
     }     
     else if(cantidadLamparas <3){
          precioFinal = precioLampara;
     }

     descuento = precioLampara * porcentajeDescuento / 100;

     precioLampara = precioLampara - descuento;

     precioFinal = precioLampara * cantidadLamparas;

// E
     if (precioFinal > 120){
          iibb= precioFinal * .1;
          precioFinal= precioFinal + iibb;
     }

     document.getElementById("txtIdprecioDescuento").value=precioLampara.toFixed(2);

     alert("Usted pago $" + precioFinal.toFixed(2) + " siendo $" + iibb.toFixed(2) + " el impuesto que se pagó.");     

     document.getElementById("txtIdCantidad").value="";
/*
// A
     if (cantidadLamparas >= 6){  

          descuento= precioLampara - precioLampara * .5;

          precioFinal= descuento * cantidadLamparas;
     }
// B
     else if (cantidadLamparas == 5){
          switch(marcaLampara){

               case "ArgentinaLuz":
                    descuento= precioLampara - precioLampara * .4;

                    precioFinal= descuento * cantidadLamparas;
                    break;
               
               case "FelipeLamparas":
               case "JeLuz":
               case "HazIluminacion":
               case "Osram":
                    descuento= precioLampara - precioLampara * .3;

                    precioFinal= descuento * cantidadLamparas;
                    
                    break;
          }
     }     
// C    
     else if (cantidadLamparas == 4){
          switch(marcaLampara){

               case "ArgentinaLuz":
               case "FelipeLamparas":
                    descuento= precioLampara - precioLampara * .25;

                    precioFinal= descuento * cantidadLamparas;
                    break;
               
               case "JeLuz":
               case "HazIluminacion":
               case "Osram":
                    descuento= precioLampara - precioLampara * .2;

                    precioFinal= descuento * cantidadLamparas;
                    break;
          }
     }     
// D
     else if (cantidadLamparas == 3){
          switch(marcaLampara){
               case "ArgentinaLuz":
                    descuento= precioLampara - precioLampara * .15;

                    precioFinal= descuento * cantidadLamparas;
                    break;

               case "FelipeLamparas":
                    descuento= precioLampara - precioLampara * .10;

                    precioFinal= descuento * cantidadLamparas;
                    break;

               case "JeLuz":
               case "HazIluminacion":
               case "Osram":
                    descuento= precioLampara - precioLampara * .05;

                    precioFinal= descuento * cantidadLamparas;
                    break;
          }

     }
// E
     if (precioFinal > 120){
          iibb= precioFinal * .1;
          precioFinal= precioFinal + iibb;
     }

     document.getElementById("txtIdprecioDescuento").value=precioFinal;

     alert("Usted pago $" + precioFinal + " siendo $" + iibb + " el impuesto que se pagó.");
*/
}