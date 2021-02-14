/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre = document.getElementById("txtIdNombre").value;

	let edad = document.getElementById("txtIdEdad").value;


	alert("Usted se llama " + nombre + ", y tienen " + edad + " años." );

	// otra forma de concatenar texto con variables

	//alert(`Usted se llama ${nombre}, y tiene ${edad} años.`)


// para volver a dejar la caja de texto "vacia"
	document.getElementById("txtIdNombre").value="";

	document.getElementById("txtIdEdad").value="";
}

