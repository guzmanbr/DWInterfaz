/*
- Ocultar/mostar una imagen(a elegir) haciendo doble click sobre ella.
- Ocultar un texto de una sección en un tiempo de 3 segundos.
- Desvanecer una imagen cuando se clique en ella durante 3 segundos.
- Que aparezca una imagen al pulsar un botón rápidamente.
- Crear un menú con 4 elementos llamados elemento 1, elemento 2, etc cada un con 3 subelementos llamados 1.1, 1.2, etc. 
  Originalmente tan solo están los 4 elementos. Si se pincha en un elemento, desplegándose los subelementos con el efecto slide, 
  replegándose los subelementos de otros elementos del menú si estos estuvieran desplegados.
*/

$(document).ready(function(){

    //- Ocultar/mostar una imagen(a elegir) haciendo doble click sobre ella.
    $("img").dblclick(function(){
        $(this).fadeTo(100,0.15);
    });

    //- Ocultar un texto de una sección en un tiempo de 3 segundos.
    $("section").dblclick(function () {
        $(this).children("p").fadeOut(3000);
    });

    //- Desvanecer una imagen cuando se clique en ella durante 3 segundos.
    $("img").mousedown(function () {
        $(this).fadeOut(3000);
    });

    //Que aparezca una imagen al pulsar un botón rápidamente.
    $("button").click(function () {
        $("#oculta").show();
    });






  });