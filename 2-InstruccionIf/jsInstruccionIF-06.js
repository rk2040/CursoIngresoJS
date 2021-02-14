function mostrar()
{
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value)

	if (edad <13 ){

		alert("Usted es un niño.");

	}

	else if (edad >=13 && edad <=17 ){

			alert("Usted es un adolescente.");
	}

	else {	
	alert("Usted es un adulto");

	}


	document.getElementById("txtIdEdad").value=""



}//FIN DE LA FUNCIÓN