function mostrar()
{
    let hora = parseInt(document.getElementById("laHora").value);

    switch (hora){
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de mañana.");
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            alert("Es de tarde.");
            break;
        default:
            if (hora > 19 && hora < 24){
                alert("Es de noche. A dormir.");
            } 
            else{
                alert("Es de noche.");
            }
    }
}
