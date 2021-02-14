function mostrar()
{
	let puntoCardinal = document.getElementById("txtIdDestino").value;

	switch (puntoCardinal){

		case "Bariloche":
			alert("Bariloche esta al Oeste");
			break;

		case "Cataratas":
			alert("Cataratas esta al Norte");
			break;

		case "Mar del plata":
			alert("Mar del Plata esta al Este");
			break;

		case "Ushuaia":
			alert("Ushuaia esta al sur")
			break;
	}

}//FIN DE LA FUNCIÓN