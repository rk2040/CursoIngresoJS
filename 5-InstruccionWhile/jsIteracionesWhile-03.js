/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada = prompt("Ingrese la clave.");

	while(claveIngresada != "utn750"){
		alert("Clave incorrecta. Vuelva a intentarlo.");

		claveIngresada = prompt("ingrese el número clave.");
	}
	alert("Clave correcta!!! No entre al while");
	
}//FIN DE LA FUNCIÓN
