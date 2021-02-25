function mostrar()
{
    let precio = parseInt(prompt("Ingrese el precio"));
    let porcentaje = parseInt(prompt("Ingrese el porcentaje de descuento"));
    let descuento = precio * porcentaje / 100;
    let precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value=precioFinal;
}
