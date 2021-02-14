/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*let nombre;

	nombre=txtIdNombre.value;	No hacerlo de esta forma!
	
	alert(nombre);*/	//asi lo habia hecho yo


	let nombre = document.getElementById("txtIdNombre").value;

	alert(nombre);	//asi lo hicimos en clase

	document.getElementById("txtIdNombre").value="";	//esto se uso para volver a dejar el cuadro vacio para el siguiente ingreso
}


