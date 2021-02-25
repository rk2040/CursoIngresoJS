/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let numMax;
	let numMin;
	let respuesta;
	let flag = 0;

	do{
		numero = parseInt(prompt("Ingrese un número."));
		while(isNaN(numero)){
			numero = parseInt(prompt("Número invalido. Ingrese un número."));
		}
		if (flag == 0){
			numMax = numero;
			numMin = numero;
			flag = 1;
		}
		else{
			if(numero > numMax){
				numMax = numero;
			}
			else if(numero < numMin){
				numMin = numero;
			}
			
		}
		respuesta = prompt("Desea ingresar otro número? s / n");
	}while(respuesta == "s");

	document.getElementById("txtIdMaximo").value=numMax;
	document.getElementById("txtIdMinimo").value=numMin;
	
}//FIN DE LA FUNCIÓN