function mostrar()
{
    let nota;
    let minF = 10;
    let totalF = 0;
    let notasM;
    let minM =10;
    let totalM = 0;
    let sexo;
    let aprobadosM = 0;
    let notasTotales;
    let promedio;
    flag = 0;

    for (let i = 0; i < 5; i ++){
        sexo = prompt("Ingrese su genero: f/m.");
        while (sexo != 'f' && sexo != 'm'){
            sexo = prompt("Genero incorrecto. Ingrese su genero.")
        }

        notas = parseInt(prompt("Ingrese su nota de 0 a 10"));
        while (isNaN(nota) || nota > 10 || nota < 0){
            notasF = parseInt(prompt("Nota invalida. Ingrese su nota."));
        }

        totalNotas += nota;

        switch (sexo){
            
            case 'm':
                    if (notasM >= 6){
                        aprobadosM ++;
                    }

                break;
        }

    }
    if (flag == 0){
        notaMin = nota;
        sexoMin =sexo;
        flag = 1;
    }
    if (nota < notaMin){
        notaMin = nota;
        sexoMin = sexo;
    }

    promedio = totalNotas / 5;                                  //A
    alert("El promedio de las notas totale es: " + promedio);   //A

    alert("La nota mas baja es: " + minF + " y es del sexo " + sexoMin);     //B
    }                                                                           //B
    else{                                                                       //B
        alert("La nota mas baja es: " + minM + " y es del sexo masculino.");    //B
    }
    alert("La cantidad de varones que su nota ha sido mayor o igual a 6 es: " + aprobadosM);    //C

}
