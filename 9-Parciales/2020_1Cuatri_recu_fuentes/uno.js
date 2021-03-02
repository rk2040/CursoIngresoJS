function mostrar()
{
	let producto;
	let productoCaro;
	let productoMax;
	let fabricante;
	let jabonCaro;
	let precio;
	let precioCaro;
	let precioTotAlcohol = 0;
	let precioBarbijo = 0;
	let precioTotBarbijo = 0;
	let precioJabon = 0;
	let precioTotJabon = 0;
	let cantidad;
	let cantidadCaro;
	let cantidadBarbijo = 0;
	let cantidadJabon = 0;
	let cantidadAlcohol = 0;
	let marca;
	let promedio;
	let flag = 1;

	for (let i = 0; i < 5; i ++){
		producto = prompt("Ingrese un producto: barbijo/jabon/alcohol").toLowerCase();
		while (producto != "barbijo" && producto != "jabon" && producto != "alcohol"){
			producto = prompt("Producto invalido. Ingrese un producto: barbijo/jabon/alcoho").toLowerCase();
		}
		marca = prompt("Ingrese la marca del producto");
		fabricante = prompt("Ingrese el fabricante del producto");
		precio = parseInt(prompt("Ingrese el precio del producto de 100 a 300."));
		while (isNaN (precio) || precio < 100 || precio > 300){
			precio = parseInt(prompt("Precio invalido. Ingrese el precio del producto de 100 a 300"));
		}
		cantidad = parseInt(prompt("ingrese la cantidad del producto de 1 a 1000."));
		while (isNaN (cantidad) || cantidad < 1 || cantidad > 1000){
			cantidad = parseInt(prompt("Cantidad invalido. Ingrese la cantidad de producto de 1 a 1000."));
		}
		//Calcula el alcohol mas caro, marca y cantidad del mas barato
		//Y acumula las cantidades de cada tipo
		switch (producto){
			case "jabon":
				cantidadJabon += cantidad;
				precioJabon = precio * cantidad;
				precioTotJabon += precioJabon;

				if (flag || precio > precioCaro){
					precioCaro = precio;
					productoCaro = producto;
					jabonCaro = marca;
					cantidadCaro = cantidad;

					flag = 0;
				}
				break;
			case "barbijo":
				cantidadBarbijo += cantidad;
				precioBarbijo = precio * cantidad;
				precioTotBarbijo += precioBarbijo;
				break;
			case "alcohol":
				cantidadAlcohol += cantidad;
				precioAlcohol = precio * cantidad;
				precioTotAlcohol += precioAlcohol;
				break;
		}

	}

	//Calcula el que tienen mas cantidad de unidades
	if (cantidadAlcohol > cantidadBarbijo && cantidadAlcohol > cantidadJabon){
		productoMax = "alcohol";
		promedio = (precioTotAlcohol / cantidadAlcohol).toFixed(2);
	}
	else if (cantidadBarbijo >= cantidadAlcohol && cantidadBarbijo > cantidadJabon){
		productoMax = "barbijo";
		promedio = (precioTotBarbijo / cantidadBarbijo).toFixed(2);
	}
	else{
		productoMax = "jabon";
		promedio = (precioTotJabon / cantidadJabon).toFixed(2);
	}
	
	

	console.log("El " + productoCaro + " mas caro vale $" + precioCaro);
	console.log("El " + productoCaro + " mas caro es marca " + jabonCaro);
	console.log("La cantidad de " + productoCaro + " mas caro es " + cantidadCaro);
	console.log("El tipo con mas uniades es " + productoMax);
	console.log("El promedio de compra del tipo con mas uniades es " + promedio);
	console.log("La cantidad de barbijos es " + cantidadBarbijo);
}
