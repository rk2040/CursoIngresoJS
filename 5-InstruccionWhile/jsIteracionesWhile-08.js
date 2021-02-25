/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let numero;
	let numPositivo = 0;
	let numNegativo = 1;
	let flag = 0;

	do{
		numero = parseInt(prompt("Ingrese un numero positivo o negativo."));
		while(isNaN(numero)){
			numero = parseInt(prompt("El valor ingresado no es un número. Ingrese un numero positivo o negativo."));
		}
		if (numero <0){
			numNegativo *= numero;
			flag = 1;
		}
		else{
			numPositivo += numero;
		}
		respuesta = prompt("Desea ingresar otro numero? s / n");
	}while(respuesta == "s");

	if (flag == 0){ // es lo mimo poner (flag) sin el == 1 (porque 1 es verdadero y solo poner flag es verdadero)
		numNegativo = 0;
	}

	document.getElementById("txtIdProducto").value=numNegativo;
	document.getElementById("txtIdSuma").value=numPositivo;

}//FIN DE LA FUNCIÓN