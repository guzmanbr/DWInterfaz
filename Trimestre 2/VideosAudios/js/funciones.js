let audio = document.getElementById('sonido');
let divDuraacion = document.getElementById('duracion');

function volumenInicial(audio) {
    audio.volume = 0.4;
}


audio.onloadedmetadata = function () {
    console.log('metadata loaded!');
    console.log(this.duration);
    let div = document.getElementById('duracion');
    div.appendChild(document.createTextNode((audio.duration)));
};


volumenInicial(audio);

