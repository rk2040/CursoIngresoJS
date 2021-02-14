function mostrar()
{
	let precioBase = 15000;

	let estacion = document.getElementById("txtIdEstacion").value;

	let destino = document.getElementById("txtIdDestino").value;

	let precioFinal;
/*
	switch (estacion){
		case "Invierno":

			switch (destino){
				case "Bariloche":
					precioFinal = precioBase * 20 / 100 + precioBase;
					break;

				case "Cataratas":
					
				case "Cordoba":
					precioFinal = precioBase - precioBase * 10 / 100;
					break;

				case "Mar del plata":
					precioFinal = precioBase - precioBase * 20 / 100;
					break;

			}
			break;

		case "Verano":
			switch (destino){
				case "Bariloche":
					precioFinal = precioBase - precioBase * 20 / 100;
					break;

				case "Cataratas":
					
				case "Cordoba":
					precioFinal = precioBase * 10 / 100 + precioBase;
					break;

				case "Mar del plata":
					precioFinal = precioBase * 20 / 100 + precioBase;
					break;
			}
			break;

		case "Primavera":

		case "Otoño":
			switch (destino){
				case "Bariloche":
					
				case "Cataratas":
					
				case "Mar del plata":
					precioFinal = precioBase * 10 / 100 + precioBase;
					break;

				case "Cordoba":
					precioFinal = precioBase;
			}
			break;
						
	}

		alert("El precio de su viaje a " + destino + " es de: " + precioFinal);
*/

///*
	if (estacion == "Invierno"){

		if (destino == "Bariloche"){

			precioFinal = precioBase * 20 / 100 + precioBase;

		}

		else if (destino == "Cataratas" || destino == "Cordoba"){

			precioFinal = precioBase - precioBase * 10 / 100;

		}

		else if (destino == "Mar del plata"){

			precioFinal = precioBase - precioBase * 20 / 100;

		}
	}


	else if (estacion == "Verano"){

		if (destino == "Bariloche"){

			precioFinal = precioBase - precioBase * 20 / 100;

		}

		else if (destino == "Cataratas" || destino == "Cordoba"){

			precioFinal = precioBase * 10 / 100 + precioBase;

		}

		else if (destino == "Mar del plata"){

			precioFinal = precioBase * 20 / 100 + precioBase;

		}
	}

	else if (estacion == "Otoño" || estacion == "Primavera"){

		if (destino == "Bariloche"){

			precioFinal = precioBase * 10 / 100 + precioBase;

		}

		else if (destino == "Cataratas" || destino == "Mar del plata"){

			precioFinal = precioBase * 10 / 100 + precioBase;

		}

		else if (destino == "Cordoba"){

			precioFinal = precioBase;
		}	

	}

	alert("El precio de su viaje a " + destino + " es de: $" + precioFinal);
//*/
}//FIN DE LA FUNCIÓN