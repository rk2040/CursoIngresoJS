/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado = prompt("ingrese su genero: f / m ").toLowerCase(); // para que mayusculas o minusculas las pase todas a minusculas

	let genero;

	while(sexoIngresado != 'f' && sexoIngresado != 'm'){

		alert("El dato ingresado es incorrecto. Vuelva a intentarlo.")

		sexoIngresado = prompt("ingrese f ó m .").toLowerCase();
	}
	// if y else if son opcional, para agregar Masculino o Femenino al cuadro de texto final.
	if(sexoIngresado == 'm'){
		genero = "Masculino";
	}

	else if(sexoIngresado =='f'){
		genero = "Femenino";
	}

	document.getElementById("txtIdSexo").value=genero;
}//FIN DE LA FUNCIÓN