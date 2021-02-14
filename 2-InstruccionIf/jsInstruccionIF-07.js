function mostrar()
{
	//tomo la edad  
	
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	let estadoCivil = document.getElementById("estadoCivil").value;

	if (edad < 18 && estadoCivil != "Soltero"){

		alert("Usted es muy pequeño para no ser Soltero.");

	}

	else{

		alert("Todo ok.")
	}
	
document.getElementById("txtIdEdad").value=""

}//FIN DE LA FUNCIÓN