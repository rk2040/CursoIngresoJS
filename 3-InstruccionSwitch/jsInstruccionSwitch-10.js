function mostrar()
{
	let estacion = document.getElementById("txtIdEstacion").value;

	let destino = document.getElementById("txtIdDestino").value;
	
	switch (estacion){
		case "Invierno":

			switch (destino){
				case "Bariloche":
					alert("Se puede viajar a " + destino + " en " + estacion);
					break;

				case "Cataratas":
					
				case "Cordoba":
					
				case "Mar del plata":
					alert("No se puede viajar a " + destino + " en " + estacion);
					break;

			}
			break;

		case "Verano":

			switch (destino){
				case "Mar del plata":

				case "Cataratas":
					alert("Se puede viajar a " + destino + " en " + estacion);
					break;
					
				case "Cordoba":
				
				case "Bariloche":
					alert("No se puede viajar a " + destino + " en " + estacion);
					break;

			}
			break;

		case "Otoño":

			switch (destino){
				case "Mar del plata":

				case "Cataratas":
						
				case "Cordoba":
				
				case "Bariloche":
					alert("Se puede viajar a " + destino + " en " + estacion);
					break;

			}
			break;

		case "Primavera":

			switch (destino){
				case "Mar del plata":

				case "Cataratas":
						
				case "Cordoba":
				
					alert("Se puede viajar a " + destino + " en " + estacion);
					break;

				case "Bariloche":
					alert("No se puede viajar a " + destino + " en " + estacion);
					break;
			}
			break;
						
	}


}//FIN DE LA FUNCIÓN