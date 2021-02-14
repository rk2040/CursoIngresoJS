function mostrar()
{
	//tomo la edad  

	let edad = parseInt(document.getElementById("txtIdEdad").value)

	if (edad <13){

		alert("Usted no es un adolescente, es un niño.")
		
	}	

	else if (edad >= 18){

		alert("Usted no es un adolescente, es un adulto.");

	}

	document.getElementById("txtIdEdad").value=""

}//FIN DE LA FUNCIÓN

/*  otra forma de hacerlo

if (!(edad >= 13 && edad <= 17)){
}

otra forma

if (edad < 13 or edad > 17){
}


yo lo habia hecho asi 

	if (edad <13){

		alert("Usted no es un adolescente, es un niño.")
		
	}	

	else if (edad >= 18){

		alert("Usted no es un adolescente, es un adulto.");
*/