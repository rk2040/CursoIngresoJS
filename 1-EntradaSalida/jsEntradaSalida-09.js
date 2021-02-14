/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "nuevoSueldo".*/
function mostrarAumento()
{
	let sueldo;

	let aumento;

	let nuevoSueldo;

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	//nuevoSueldo = sueldo * 1.1;    yo lo habia hecho asi, pero no es exacto, asi que lo corregi como sigue aca abajo


	aumento = sueldo * 10 / 100; // o puedo poner = sueldo * 0.1

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value=nuevoSueldo.toFixed(2); // toFixed(2);  hace que solo muestre 2 decimales

}
