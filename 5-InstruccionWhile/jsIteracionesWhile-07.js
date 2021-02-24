/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0;
	let numero = 0;
	let respuesta = "si";
	let promedio;

	while(respuesta == "si"){
		numero += parseInt(prompt("Ingrese un número."));
		contador ++;
		respuesta = prompt("Desea ingresar otro número? si / no")
	}
	promedio = numero / contador;

	alert("La cantidad de números ingresados fue de " + contador + ". La suma total fue de " + numero + " y el promedio de esos números es de " + promedio);
	document.getElementById("txtIdSuma").value=numero;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN