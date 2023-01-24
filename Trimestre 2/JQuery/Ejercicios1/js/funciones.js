/*

*/

$(document).ready(function(){

    //- Código que me oculte todos los elementos de tipo sección.
    // $("section").click(function(){
    //   $("section").hide();
    // });

    //- Oculte una sección al pulsar sobre ella.
    // $("section").click(function(){
    //     $(this).hide();
    // });

    //-Oculte una sección al hacer doble click sobre ella.
    $("section").dblclick(function(){
        $(this).hide("5ms");//fadeOut()
    });

    //-Ponga el fondo de color azul de una sección al entrar en ella y se ponga verde al salir.
    $("section").mouseenter(function () {
        $(this).css("background-color","blue");
    });

    //
    $("section").mouseleave(function () {
        $(this).css("background-color","green");
    });

    //-Ponga el fondo de color amarillo al cambiar el tamaño de una ventana.
    $(window).resize(function () {
        $("section").css("background-color","yellow")
    });

    //-Cambie el fondo a color amarillo de una sección al pulsar un tecla del teclado.
    $(window).keypress(function () {
       $("section").css("background-color","yellow")
    });

    //-Mostrar todo
    $("button").click(function () {
        $("section").show("2ms");//show(),fadIn();
    });

    


  });