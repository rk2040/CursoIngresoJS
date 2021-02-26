function mostrar()
{
    let nota;
    let totalNotas = 0;
    let sexo;
    let aprobadosM = 0;
    let promedio;
    flag = 1;

    for (let i = 0; i < 5; i ++){

        sexo = prompt("Ingrese su genero: f/m.");
            while (sexo != 'f' && sexo != 'm'){
                sexo = prompt("Genero incorrecto. Ingrese su genero.");
            }      
        nota = parseInt(prompt("Ingrese su nota de 0 a 10"));
            while (isNaN(nota) || nota < 0 || nota > 10){
                nota = parseInt(prompt("Nota invalida. Ingrese su nota."));
            }
        totalNotas += nota;       

        switch (sexo){
            
            case 'm':
                if (nota >= 6){
                    aprobadosM ++;
                }

                break;
        }

        if (flag ){
            notaMin = nota;
            sexoMin =sexo;
            flag = 0;
        }
        if (nota < notaMin){
            notaMin = nota;
            sexoMin = sexo;
        }
    }
    promedio = totalNotas / 5;                                  //A
    alert("El promedio de las notas totale es: " + promedio);   //A

    alert("La nota mas baja es: " + notaMin + " y es del sexo " + sexoMin);     //B

    alert("La cantidad de varones que su nota ha sido mayor o igual a 6 es: " + aprobadosM);    //C

}
