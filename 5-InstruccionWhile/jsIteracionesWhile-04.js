/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/


/*  Nombre: Pardo Roberto 
    Division: F

WHILE    (lo probe en el ejercicio 4 de while)

1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores 
que 10 y menores 20 (incluisive en ambos casos)

2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario). 
Mostrar tambien el promedio de los numeros que cumplen la condicion.
*/


function mostrar()
{
	let respuesta = "si";
	let cantidadEnRango = 0;
	let numero;
	let sumaNumeros = 0;
	let promedio;
// ejercicio while 2 sabado 20 02 2021

	while(respuesta == "si"){
		numero = parseInt(prompt("Ingrese un número"));

		if (isNaN(numero)){
			alert("Numero invalido, vualva a intentarlo.")
		}
		else if (numero >= 10 && numero <= 20){
		cantidadEnRango++;
		sumaNumeros = sumaNumeros + numero; 
		}
		respuesta = prompt("Desea ingresar otro número? si / no")
	}
	promedio = sumaNumeros / cantidadEnRango;

	alert("La cantidad de números entre 10 y 20 es de: " + cantidadEnRango + " y el promedio de los números dentro de ese rango es de: " + promedio);


/*	ejercicio while 1 sabado 20 02 2021
	while(contador <5){
		numero = prompt("Ingrese un número");

		if (numero > 10 && numero < 20){
			ingresaEnRango++;
		}		
		contador++;
	}
	alert("La cantidad de números mayores a 10 y menores que 20 son: " + ingresaEnRango);

*/	

//es el ejercicio while 4 original
	/*let numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	while(numero < 0 || numero > 9 || isNaN(numero)){

		alert("Numero incorrecto, vuelva a intentarlo.")

		numero = parseInt(prompt("ingrese un número entre 0 y 9."));
	}
	document.getElementById("txtIdNumero").value=numero;
*/
}//FIN DE LA FUNCIÓN