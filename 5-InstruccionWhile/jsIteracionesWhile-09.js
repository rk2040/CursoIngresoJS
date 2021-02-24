/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero = 0;
	let numMax = 0;
	let numMin = 0;
	let respuesta = "s";

	while(respuesta == "s"){
		numero = parseInt(prompt("Ingrese un número."));
		if (numero > numMax){
			numMax = numero;
			numMin = numero;
		}
		else{
			numMin = numero;
		}
		respuesta = prompt("Desea ingresar otro número? s / n");
	}
	document.getElementById("txtIdMaximo").value=numMax;
	document.getElementById("txtIdMinimo").value=numMin;
	
}//FIN DE LA FUNCIÓN