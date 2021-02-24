/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta = "si";
	let numero = 0;
	let numPositivo = 0;
	let numNegativo = 1;

	while(respuesta == "si"){
		numero = parseInt(prompt("Ingrese un numero positivo o negativo."));
		if (numero <0){
			numNegativo *= numero;
		}
		else{
			numPositivo += numero;
		}
		respuesta = prompt("Desea ingresar otro numero? si / no");
	}
	document.getElementById("txtIdProducto").value=numNegativo;
	document.getElementById("txtIdSuma").value=numPositivo;

}//FIN DE LA FUNCIÓN