/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;//=document.getElementById("txtIdNumeroUno").value;
			//esto lo comente para asignar los valoresa a las variables como lo hicimos en clase
	let num2;//=document.getElementById("txtIdNumeroDos").value;

	let resultado;

	num1=document.getElementById("txtIdNumeroUno").value;

	num2=document.getElementById("txtIdNumeroDos").value;

	resultado= parseInt(num1) + parseInt(num2); //parseInt() convierte la variable string (que se le coloca entre los parentesis) a integer

	alert("La suma es: " + resultado);
}

/* codigo mas resumido, funciona igual al de arriba 

Hacerlo de esta forma para que la variable ya quede de tipo integer

	let num1;

	let num2;

	let resultado;

	num1= parseInt(document.getElementById("txtIdNumeroUno").value);

	num2=parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado= num1 + num2;

	alert("La suma es: " + resultado);

*/