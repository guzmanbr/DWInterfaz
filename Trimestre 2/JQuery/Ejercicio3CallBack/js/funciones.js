
//Desplazar 
$(document).ready(function () {
    $("button").click(function () {
        $("div").animate({
            left: '250px',
            bottom: '20px'
        });
    });
});

//Modificar varias propiedades
$(document).ready(function(){
    $("button").click(function(){
      $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      });
    });
  });