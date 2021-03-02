function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta;
	let flag = 1;
	let tempMax;
	let nombreTempMax;
	let mayoresViudos = 0;
	let homSolteros = 0;
	let homViudos = 0;
	let mayoresMaxTemp = 0;
	let edadTotal = 0;
	let promedioEdad;


	do{
		nombre = prompt("Ingrese su nombre");
		edad = parseInt(prompt("Ingrese su edad"));
		while (isNaN(edad)){
			edad = parseInt(prompt("Edad invalida. Ingrese su edad"));
		}
		sexo = prompt("Ingrese su genero: f/m").toLowerCase();
		while (sexo != 'f' && sexo != 'm'){
			sexo = prompt("Genero invalido. Ingrese su genero: f/m").toLowerCase();
		}
		estadoCivil = prompt("Ingrese su estado civil: soltero/casado/viudo").toLowerCase();
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Estado civil invalido. Ingrese su estado civil: soltero/casado/viudo").toLowerCase();
		}
		temperatura = parseInt(prompt("Ingrese su temperatura corporal"));
		while (isNaN(temperatura)){
			temperatura = parseInt(prompt("La temperatura es invalida. Ingrese su temperatura corporal"));
		}

		//A Calcula la persona con mayor temperatura
		if (flag || temperatura > tempMax){
			tempMax = temperatura;
			nombreTempMax = nombre;
			flag = 0;
		}
		//B Calcula cantidad de mayores de 18 viudos
		if (edad >= 18 && estadoCivil == "viudo"){
				mayoresViudos ++;
		}

		//C Calcula cantidad de hombres solteors o viudos
		if (sexo == 'm'){
			switch (estadoCivil){
				case "soltero":
					homSolteros ++;
					edadTotal += edad;
					break;
					
				case "viudo":
					homViudos ++;
					break;
			}
		}

		//D Calcula cantidad de personas mayores de 60 y con mas de 38° grados
		if (edad >= 60 && temperatura >= 38){
			mayoresMaxTemp ++;
		} 	



		respuesta = prompt("Desea ingresar otro pasajero? s/n");
	}while (respuesta == 's');

	//D Calcula el promedio de edad de los hombres solteros
	promedioEdad = edadTotal / homSolteros;


	console.log("La persona con mas temperatura es " + nombreTempMax + " con " + tempMax + "°");
	console.log("La cantidad de personas mayores de edad viudos es de " + mayoresViudos);
	console.log("La cantidad de hombres solteros es " + homSolteros + " y la cantidad de hombre viudos es " + homViudos);
	console.log("La cantidad de personas de la tercera edad (mayores de 60) que tienen mas de 38° de temperatura es " + mayoresMaxTemp);
	console.log("El promedio de edad entre los hombres solteros es de " + promedioEdad);

}