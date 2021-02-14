function mostrar()
{
	//tomo el mes

	let mes = document.getElementById("txtIdMes").value;


	switch(mes){
		case "Febrero":
			alert("Este mes tiene 28 días y cada 4 años tiene 29 días.")
			break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":	
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 días.")
			break;
			
		case "Abril":		
		case "Junio":			
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días.")
			break;				
	}

}//FIN DE LA FUNCIÓN