/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;

	//el prompt toma el valor que ingresa el usuario en la caja de texto
	nombre=prompt("Ingrese su nombre"); 

	document.getElementById("txtIdNombre").value=nombre;
}

