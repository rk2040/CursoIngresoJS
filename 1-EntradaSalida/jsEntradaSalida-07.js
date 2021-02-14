/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

	let num1;

	let num2;

	let resultado;


function sumar()
{	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 + num2;


	alert("El resultado de la Suma es: " + resultado);	


	document.getElementById("txtIdNumeroUno").value="";
	
	document.getElementById("txtIdNumeroDos").value="";
}

function restar()
{
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 - num2;


	alert("El resultado de la Resta es: " + resultado);


	document.getElementById("txtIdNumeroUno").value="";

	document.getElementById("txtIdNumeroDos").value="";
}

function multiplicar()
{ 
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 * num2;


	alert("El resultado de la Multiplicación es: " + resultado);


	document.getElementById("txtIdNumeroUno").value="";

	document.getElementById("txtIdNumeroDos").value="";
}

function dividir()
{
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 / num2;


	alert("El resultado de la División es: " + resultado);


	document.getElementById("txtIdNumeroUno").value="";

	document.getElementById("txtIdNumeroDos").value="";
}

