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
  let preciArena;
  let precioCal;
  let precioCemento;
  let precioMax;
  let contArena;
  let contCal;
  let contCemento;
  let precioSubTotal;
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
 
    precioSubTotal = cantidad * precio;
    precioBruto += precioSubTotal;

    switch (tipoBolsa){
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

    cantidadBolsas += cantidad;

    if (flag || precio > precioMax){
      precioMax = precio;
      tipoMas = tipoBolsa;
      flag = 0;
    }

    respuesta = prompt("Desea agregar otro producto? s/n")
  }while (respuesta == 's');

  if (cantidadBolsas < 10){
    porcentaje = 0;
  }
  else if (cantidadBolsas < 30){
    porcentaje = .15;
  }
  else{
    porcentaje = .25;
  }
  descuento = precioBruto * porcentaje;
  precioFinal = precioBruto - descuento;
 
  alert(precioBruto);
  alert(precioFinal);



}
