function insertar(num) {
    var valor = $('.calculos').val(); 
    $('.calculos').val(valor + num); 
}

function limpiar() {
    $('.calculos').val('');
}

function retroceso() {
    var valor = $('.calculos').val(); 
    $('.calculos').val(valor.substring(0,valor.length-1)); 
}

function igual() {
    $('.calculos').val(eval($('.calculos').val())); 
}