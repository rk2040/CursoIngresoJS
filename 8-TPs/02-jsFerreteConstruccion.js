/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo = parseFloat(document.getElementById("txtIdLargo").value);
    
    let ancho = parseFloat(document.getElementById("txtIdAncho").value);

    let circulo = 2 * (largo + ancho) * 3

    alert("El alambre necesario para cubrir el terreno con tres hilos es : " + circulo + " metros");

    document.getElementById("txtIdLargo").value="";

    document.getElementById("txtIdAncho").value="";

    document.getElementById("txtIdRadio").value="";
}


function Circulo () 
{
	let radio = parseFloat(document.getElementById("txtIdRadio").value);

    let circulo = 2 * (3.1416 * radio) * 3

    alert("El alambre necesario para cubrir el terreno con tres hilos es : " + circulo + " metros");

    document.getElementById("txtIdLargo").value="";

    document.getElementById("txtIdAncho").value="";

    document.getElementById("txtIdRadio").value="";
}


function Materiales () 
{
	let largo = parseFloat(document.getElementById("txtIdLargo").value);
    
    let ancho = parseFloat(document.getElementById("txtIdAncho").value);

    let radio = parseFloat(document.getElementById("txtIdRadio").value);

    let areaReactanguro = largo * ancho;

    let areaCirculo = (radio * radio) * 3.1416;

    let cemento = 2;

    let cal = 3;

    let cementoRectangulo = cemento * areaReactanguro

    let calRectangulo = cal * areaReactanguro

    let cementoCirculo =  cemento * areaCirculo;
    
    let calCirculo = cal * areaCirculo;


    alert("Para las medidas del terreno rectangular se necesitan " + cementoRectangulo + " bolsas de cemento y " + calRectangulo + " bolsas de cal.")

    alert("Para las medidas del terreno circular se necesitan " + cementoCirculo + " bolsas de cemento y " + calCirculo + " bolsas de cal.")

    document.getElementById("txtIdLargo").value="";

    document.getElementById("txtIdAncho").value="";

    document.getElementById("txtIdRadio").value="";

}