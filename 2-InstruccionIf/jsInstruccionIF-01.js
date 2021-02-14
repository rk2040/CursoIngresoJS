function mostrar()
{
	//tomo la edad  

	let edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad == 15){

		alert("Niña bonita");

	}

	else{

		alert("Su edad es " + edad);
		
	}


	document.getElementById("txtIdEdad").value="";

}//FIN DE LA FUNCIÓN