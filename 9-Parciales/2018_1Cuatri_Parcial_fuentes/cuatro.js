function mostrar()
{
    let num1 = parseInt(prompt("Ingrese el primer número."));
    let num2 = parseInt(prompt("Ingrese el segundo número"));
    let suma = num1 + num2;
    let resta = num1 - num2;

    if (num1 == num2){
        alert(num1 , num2);
    }
    else if (num1 > num2){
        alert(resta);
    }
    else if (num1 < num2 && suma > 10){
        alert("La suma es " + suma + " y supero el 10.");
    }
    else{
        alert(suma);
    }
    
}
