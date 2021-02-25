function mostrar()
{
    let notasF;
    let minF = 10;
    let totalF = 0;
    let notasM;
    let minM = 10;
    let totalM = 0;
    let sexo;
    let aprobadosM;
    let notasTotales;
    let promedio;
    let i = 0;
    flag = 0;

    while (i < 5){
        sexo = prompt("Ingrese su genero: f/m.");
        if (sexo == 'f'){
            notasF = parseInt(prompt("Ingrese su nota de 0 a 10"));
            while (isNaN(notasF) || notasF > 10){
                notasF = parseInt(prompt("Nota invalida. Ingrese su nota."));
            }

            minF = notasF;
            totalF += notasF;

            if (notasF < minF ){
                minF = notasF;
            }
            
        }
        else if (sexo == 'm'){
            notasF = parseInt(prompt("Ingrese su nota de 0 a 10"));
            while (isNaN(notasM) || notasM > 10){
                notasM = parseInt(prompt("Nota invalida. Ingrese su nota."));
            }

            minM = notasM;
            totalM += notasM;

            if (notasM < minM ){
                minM = notasM;
            }
        }
        i ++;
        
    }

/*    for (let i = 0; i < 5; i ++){
        
        if (sexo == 'f'){
            notasF = parseint(prompt("ingrese su nota: 1 a 10."));
            while (isNaN (notasF)){
                notasF = parseint(prompt("Nota invalida. Ingrese su nota."));
            }
            if (notaMinF > notasF){
                notaMinF = notasF;
            }
            totalF +=notasF;
        }
        else if (sexo == 'm'){
            notasM = parseint(prompt("ingrese su nota."));
            while (isNaN (notasM)){
                notasM = parseint(prompt("Nota invalida. Ingrese su nota."));
            }
            if (notaMinM > notasM){
                notaMinM = notasM
            }
            else if (notasM >=6){
               aprobadosM ++;    // C
            }
            totalM += notasM;
        }
    }
    notasTotales = totalM + totalF;
    promedio = notasTotales / 5;    // A
    if (notaMinF < notaMinM){
        alert("A- El promedio de las notas totales es: " + promedio + " . B- la nota mas baja es : " + notaMinF + " y es de sexo Femenino. C- La cantidad de varones con una nota mayor o igual a 6 es: " + aprobadosM);
    }
    else{
        alert("A- El promedio de las notas totales es: " + promedio + " . B- la nota mas baja es : " + notaMinM + " y es de sexo masculino. C- La cantidad de varones con una nota mayor o igual a 6 es: " + aprobadosM);
    }
    */
}
