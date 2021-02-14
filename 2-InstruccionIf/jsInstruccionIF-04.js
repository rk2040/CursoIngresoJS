function mostrar()
{
	//tomo la edad  
	
	let edad = parseInt(document.getElementById("txtIdEdad").value)

	if (edad >= 13 && edad<= 17){

		alert("Usted es un adolescente de entre 13 y 17 años");

	}

	else{

		alert("Usted no es un adolescente");

	}


	document.getElementById("txtIdEdad").value=""

}//FIN DE LA FUNCIÓN