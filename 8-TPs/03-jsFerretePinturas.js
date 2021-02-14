/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    
    let centigrados = (fahrenheit - 32) * 5 / 9;


    alert(fahrenheit + "° grados Fahrenheit son " + centigrados + "° grados Centigrados.");

    document.getElementById("txtIdTemperatura").value="";
}



function CentigradosFahrenheit () 
{
    let centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);
    
    let fahrenheit = (centigrados * 9 / 5) + 32;

    alert(centigrados + "° grados Centigrados son " + fahrenheit + "° grados Fahrenheit.");

    document.getElementById("txtIdTemperatura").value="";
}
