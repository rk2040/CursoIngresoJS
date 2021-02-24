function mostrar()
{
let acumulador = 0;
let promedio;

for (let i = 0; i < 5; i++){
	acumulador += parseInt(prompt("Ingrese un número: "))
}

promedio = acumulador/5;

document.getElementById("txtIdSuma").value=acumulador;

document.getElementById("txtIdPromedio").value=promedio;

/*let i = 0;

while(i < 5){
	acumulador += parseInt(prompt("Ingrese un número: "));
	
	i ++;
}

promedio = acumulador / 5;

document.getElementById("txtIdSuma").value=acumulador;

document.getElementById("txtIdPromedio").value=promedio;
*/
	/*
	let suma;
	let promedio;

	let num1 = parseInt(prompt("ingresar un numero"));
	let num2 = parseInt(prompt("ingresar un numero"));
	let num3 = parseInt(prompt("ingresar un numero"));
	let num4 = parseInt(prompt("ingresar un numero"));
	let num5 = parseInt(prompt("ingresar un numero"));

	suma = num1+num2+num3+num4+num5;

	promedio = suma/5;

	document.getElementById("txtIdSuma").value=suma;

	document.getElementById("txtIdPromedio").value=promedio;
*/

}//FIN DE LA FUNCIÓN