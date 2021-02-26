function mostrar()
{
	let numero = parseInt(prompt("Ingrese un número positivo"));
	let contador = 0;
	
	while (isNaN(numero) || numero <= 0){
		numero = parseInt(prompt("Número invalido. Ingrese un número positivo"));
	}

	for (let i = 1; i <= numero; i ++){
		if ( numero % i == 0){
			console.log(i)
			contador ++;
		}
	}
	console.log("Cantidad de divisores son " + contador);


}//FIN DE LA FUNCIÓN