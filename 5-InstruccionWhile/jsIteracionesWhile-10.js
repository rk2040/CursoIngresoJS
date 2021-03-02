/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
    let numero;
    let respuesta;
    let numNeg = 0;
    let numPos = 0;
    let contNeg = 0;
    let contPos = 0;
    let contCero = 0;
    let numPar = 0;
    let promedioPos = 0;
    let promedioNeg = 0;
    let diferencia;

    do{
        numero = parseInt(prompt("Ingrese un número"));
        while (isNaN(numero)){
            numero = parseInt(prompt("Número invalido. Ingrese un número"));
        }

        if (numero < 0){
            numNeg += numero;
            contNeg ++;
        }
        else if (numero > 0){
            numPos += numero;
            contPos ++;
        }
        else{
            contCero ++;
        }

        
        if (numero % 2 == 0){
            numPar ++;
        }

        respuesta = prompt("Desea ingresar otro número? s/n");

    }while (respuesta == 's');

    if (contPos != 0){      //7
        promedioPos = numPos / contPos;
    }

    if (contNeg != 0){      //8
        promedioNeg = numNeg / contNeg;
    }

    diferencia = numPos + numNeg;
/*
//1
    alert("1- La suma de los números negativos es: " + numNeg +
    "\n 2- La suma de los números positivos es: " + numPos +
    );
*/
//1
    alert("1- La suma de los números negativos es: " + numNeg); 
//2
    alert("\n -La suma de los números positivos es: " + numPos);
//3
    alert("\n -La cantidad de números positivos es: " + contPos);
//4
    alert("\n -La cantidad de números negativos es: " + contNeg);
//5
    alert("\n -La cantidad de ceros es: " + contCero);
//6
    alert("\n -Cantidad de numeros pares: " + numPar); 
//7
    alert("\n -El promedio de los números positivos es: " + promedioPos);
//8
    alert("\n -El promedio de los números negativos es: " + promedioNeg);
//9
    alert("\n -La diferencia entre la suma de los números positivos y la suma de los números negativos es: " + diferencia);


	
}//FIN DE LA FUNCIÓN
/*
estrategia de resolucion
1- declarar variables
2- debo generar un bucle del tipo mientras el usuario quiera
3- pido numero
4- validar que sea numero
5- analizar el signo del numero (generar bloque de codigo para pos otro para neg y otro para cero)
5.1-
6-
7-
8-
9-
*/