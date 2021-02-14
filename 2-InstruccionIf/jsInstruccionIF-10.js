function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	let nota;
	let maximo = 10;
	let minimo = 1;

	nota = Math.round(Math.random() * (maximo - minimo) + minimo);


	if (nota >=9){

		alert("La calificacion de su examen es: Excelente")
	}

	else if (nota >= 4 && nota <=8){

		alert("La calificacion de su examen es: Aprobado")
	}

	else{

		alert("Vamos! la proxima se puede, por ahora estas: Desaprobado")
	}
	
 
}//FIN DE LA FUNCIÓN