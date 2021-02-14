/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el iva de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);

    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    let suma = precio1 + precio2 + precio3

    alert("La suma de los precios es: " + suma);

    document.getElementById("txtIdPrecioUno").value="";

    document.getElementById("txtIdPrecioDos").value="";

    document.getElementById("txtIdPrecioTres").value="";

}
function Promedio () 
{
	let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);

    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    let promedio = (precio1 + precio2 + precio3) / 3

    alert("El iva de los precios es: " + promedio);

    document.getElementById("txtIdPrecioUno").value="";

    document.getElementById("txtIdPrecioDos").value="";

    document.getElementById("txtIdPrecioTres").value="";
}
function PrecioFinal () 
{
	let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);

    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    let iva = (precio1 + precio2 + precio3) * 21 / 100

    let total = (precio1 + precio2 + precio3) + iva;

    alert("El iva de los precios es: " + total);

    document.getElementById("txtIdPrecioUno").value="";

    document.getElementById("txtIdPrecioDos").value="";

    document.getElementById("txtIdPrecioTres").value="";
}