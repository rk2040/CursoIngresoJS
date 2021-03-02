function mostrar()
{
	let producto;
	let productoBarato;
	let productoMax;
	let fabricante;
	let alcoholBarato;
	let precio;
	let precioBarato;
	let precioAlcohol = 0;
	let precioTotAlcohol = 0;
	let precioBarbijo = 0;
	let precioTotBarbijo = 0;
	let precioJabon = 0;
	let precioTotJabon = 0;
	let cantidad;
	let cantidadBarato;
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
		//Calcula el alcohol mas barato, marca y cantidad del mas barato
		//Y acumula las cantidades de cada tipo
		switch (producto){
			case "alcohol":
				cantidadAlcohol += cantidad;
				precioAlcohol = precio * cantidad;
				precioTotAlcohol += precioAlcohol;

				if (flag || precio < precioBarato){
					precioBarato = precio;
					productoBarato = producto;
					alcoholBarato = marca;
					cantidadBarato = cantidad;

					flag = 0;
				}
				break;
			case "barbijo":
				cantidadBarbijo += cantidad;
				precioBarbijo = precio * cantidad;
				precioTotBarbijo += precioBarbijo;
				break;
			case "jabon":
				cantidadJabon += cantidad;
				precioJabon = precio * cantidad;
				precioTotJabon += precioJabon;
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
	
	

	console.log("El " + productoBarato + " mas barato vale $" + precioBarato)
	console.log("El " + productoBarato + " mas barato es marca " + alcoholBarato);
	console.log("La cantidad de " + productoBarato + " mas barato es " + cantidadBarato);
	console.log("El tipo con mas uniades es " + productoMax);
	console.log("El promedio de compra del tipo con mas uniades es " + promedio);
	console.log("La cantidad de jabones es " + cantidadJabon);
}
