function mostrar()
{
  let precio;
  let tipoBolsa;
  let tipoMax;
  let cantidad;
  let cantidadBolsas = 0;
  let bolsasArena = 0;
  let bolsasCal = 0;
  let bolsasCemento = 0;
  let tipoBolsaMax;
  let precioMax;
  let importe = 0;
  let precioBruto = 0;
  let porcentaje;
  let descuento;
  let precioFinal;
  let respuesta;
  let flag = 1;


  do{
    tipoBolsa = prompt("Ingrese el tipo de producto que desea comprar: arena/cal/cemento");
    while (tipoBolsa != "arena" && tipoBolsa != "cal" && tipoBolsa != "cemento"){
      tipoBolsa = prompt("Producto invalido. Ingrese el tipo de producto que desea comprar: arena/cal/cemento");
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas del producto"));
    while (isNaN(cantidad) || cantidad < 0){
      cantidad = parseInt(prompt("La cantidad es invalido. Ingrese la cantidad de bolsas del producto"));
    }
    precio = parseFloat(prompt("Ingrese el precio del producto"));
    while (isNaN(precio) || precio < 0){
      precio = parseFloat(prompt("El importe es invalido. Ingrese el precio del producto"));
    }
 
    importe = cantidad * precio;  //Calcula importe de cada linea de la factura
    precioBruto += importe;    //Para acumular o ir sumando los importes
    

    switch (tipoBolsa){   //Para acumular el tipo de bolsas
      case "arena":
        bolsasArena += cantidad;      
        break;
  
      case "cal":
        bolsasCal += cantidad;
        break;
  
      case "cemento":
        bolsasCemento += cantidad;
        break;
    }

    cantidadBolsas += cantidad; //Para acumular el total de todas las bolsas

    //Para calcular tipo con mayor cantidad de bolsas ó averiguar el mayor
    if (bolsasArena > bolsasCal && bolsasArena > bolsasCemento){
      tipoBolsaMax = "Arena";
    }
    else if (bolsasCal >= bolsasArena && bolsasCal > bolsasCemento){
      tipoBolsaMax = "Cal";
    }
    else{
      tipoBolsaMax = "Cemento";
    }

    //Para calcular cual es el tipo mas caro
    if (flag || precio > precioMax){
      precioMax = precio;
      tipoMax = tipoBolsa;
      flag = 0;
    }

    respuesta = prompt("Desea agregar otro producto? s/n")
  }while (respuesta == 's');

  //Para calcular los descuentos
  if (cantidadBolsas < 10){
    porcentaje = 0;
  }
  else if (cantidadBolsas < 30){
    porcentaje = .15;
  }
  else{
    porcentaje = .25;
  }
  descuento = precioBruto * porcentaje;   //Calcula el descuento 
  precioFinal = precioBruto - descuento;  //Calcula precio final
 
  console.log("El precio bruto a pagar sin descuentos es: $" + precioBruto);    //A
  if(descuento > 0){
    console.log("El importe total a pagar con descuento es: $" + precioFinal);  //B
  }
  console.log("El tipo con mas cantidad de bolsas es " + tipoBolsaMax);  //D

  console.log("El tipo mas caro es " + tipoMax);    //F

}
