/*
    Crea una web donde se simule una portería y un balón gris (el balón puede ser cuadrado). 
    Cuando se pulse sobre el balón, este se volverá rojo moverá en línea recta hacia la portería. 
    Al llegar a la portería se volverá verde.
*/

$(document).ready(function(){

    //-Mover balon
    $("#balon").click(function () {
        $("#balon").animate({
            top: '-480px',
            left:'650px'
            
        },2000);
        $(this).css("background-color","red");
    });

 
});

