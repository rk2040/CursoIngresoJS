function mostrar()
{
    let nombre = document.getElementById("elNombre").value;
    let localidad = document.getElementById("laLocalidad").value;

    alert("Usted es " + nombre + " y vive en la localidad de " + localidad);

    document.getElementById("elNombre").value=""; // Opcional para limpiar los cuadros de texto al terminar
    document.getElementById("laLocalidad").value=""; // Opcional para limpiar los cuadros de texto al terminar
}
