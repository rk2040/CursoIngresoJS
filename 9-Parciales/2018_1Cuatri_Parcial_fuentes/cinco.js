function mostrar()
{
    let planeta = prompt("Ingrese un planeta del sistema solar.");

    switch (planeta){
        case "tierra":
            alert("Aca vivimos.");
            break;
        case "mercurio":
        case "venus":
            alert("aca hace más calor.");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            alert("Aca hac más frio.");
            break;
        default:
            alert("No es un planeta valido.");
    }

}
