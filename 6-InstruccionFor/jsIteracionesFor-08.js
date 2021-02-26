function mostrar()
{
	let numero;
	let mayor;
	let posMayor;

	for (let i = 0; i < 3; i ++){
		numero = parseInt(prompt("Ingrese un número positivo"));

		if (i == 0 || numero > mayor){
			mayor = numero;
			posMayor = i +1;
		}
	}
	alert("El número mayor es: " + mayor + " y su posición es: " + posMayor)

}//FIN DE LA FUNCIÓN