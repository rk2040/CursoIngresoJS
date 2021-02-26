function mostrar()
{

let cantidad = parseInt(prompt("Cuantas veces quiere ver el mensaje?"));

while (isNaN(cantidad)){
	cantidad = parseint(prompt("Cantintidad invalida. Cuantas veces quiere ver el mensaje?"))
}

for ( let i=0; i<cantidad; i ++){
	console.log("Hola UTN FRA");
}


}//FIN DE LA FUNCIÓN