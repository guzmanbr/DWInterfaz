/*
Crear un reproductor personalizado que permita:
- Iniciar vídeo.
- Reiniciar vídeo.
- Pausar vídeo.
- Parar el vídeo y que lo reinicie.
- Reproducción a 1,5x y 2x.
- Silenciar y activar sonido.
- Cambiar la resolución (al menos dos resoluciones).

Debe ser un reproductor amigable y usable.
*/

let video = document.getElementById('idVideo');
let controles = document.getElementById('controles');

/*Funcion boton reiniciar y pause*/
function reload() {
    video.autoplay = false;
    video.load();
}
/*Funcion boton reiniciar y que empiece automaticamente*/
function reloadAuto() {
    video.load();
    video.autoplay = true;
}

/*Funcion para parar el video pulsando sobre el*/
let pausado =true;
function pausePlay(){
    if (pausado) {
        video.play();
        pausado =false;
    }else if(!pausado){
        video.pause();
        pausado=true;
    }
}
/*Funcion boton play */
function play() {
    video.play();
}
/*Funcion boton pause */
function pause() {
    video.pause();
}
/*Funciones para modificar velocidad*/
video.defaultPlaybackRate = 1;/*Velocidad predefinida*/
function menosVelocidad() {
    if (video.playbackRate >1) {
        video.playbackRate -= 0.5;
    }
}
function masVelocidad() {
    if (video.playbackRate <2) {
        video.playbackRate += 0.5;
    }
}
/*Funcion boton  mutear/desmuterar */
let volumen = document.getElementById('volumen');
function mute() {
    if (video.muted == false) {
        volumen.src="media/img/mute.png"; 
        video.muted = true; 
    }else{
        volumen.src="media/img/volumen.png"; 
        video.muted = false;
    }
}

/*Funcion para cobntrolar calidad*/
let calidad = document.getElementById('calidad');
function cambiarCalidad() {
    if (calidad.selectedIndex == 0){
        video.src="media/video/cascada420.mp4";
    } 
    if (calidad.selectedIndex == 1){

        video.src="media/video/cascada640.mp4";
    } 
    if (calidad.selectedIndex == 2){
        video.src="media/video/cascada1280.mp4";
    } 
    video.autoplay = false;
}
calidad.addEventListener("change",cambiarCalidad)