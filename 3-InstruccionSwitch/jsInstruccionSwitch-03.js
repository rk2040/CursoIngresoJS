function mostrar()
{
	//tomo el mes
	
	let mes = document.getElementById("txtIdMes").value;


	switch(mes){
		case "Febrero":
			alert("Este mes no tiene mas de 29 días.")
			break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":	
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene mas de 30 días.")
			break;

		case "Abril":		
		case "Junio":			
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días.")
			break;				
	}

}//FIN DE LA FUNCIÓN