const piano = document.querySelector('.piano');
const whiteKeys = document.createElement('div');
whiteKeys.className = 'white-keys';
piano.appendChild(whiteKeys);

const whiteCompKey = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

for (let i = 0; i < 17; i++) {
    const key = document.createElement('div');
    key.classList.add('white-key', whiteCompKey[i].toLowerCase());
    whiteKeys.appendChild(key);
    const compKey = document.createElement('div');
    compKey.className = 'white-comp-key';
    compKey.innerHTML = whiteCompKey[i];
    key.appendChild(compKey);
}

const blackKeys = document.createElement('div');
blackKeys.className = 'black-keys';
piano.appendChild(blackKeys);

const blackCompKey = ['S', 'D', 'G', 'H', 'J', '2', '3', '5', '6', '7', '9', '0'];

for (let i = 0; i < 12; i++) {
    const key = document.createElement('div');
    key.classList.add('black-key', `black-key${i+1}`);
    if (i < 5) {
        key.classList.add(blackCompKey[i].toLowerCase())
    } else {
        key.classList.add(`b${blackCompKey[i]}`)
    }
    const compKey = document.createElement('div');
    compKey.className = 'black-comp-key';
    compKey.innerHTML = blackCompKey[i];
    key.appendChild(compKey);
    blackKeys.appendChild(key);
}

let sound = document.createElement('audio')
sound.id = 'audio'
sound.controls = 'controls'
sound.src = './lumiere.mp3'
sound.type = 'audio/mp3'
document.body.appendChild(sound)

function playAudio() {
    document.getElementById('audio').play();
}

setTimeout("playAudio()", 6800);

setTimeout(() => {
    document.body.removeChild(sound);
}, 10000)


download_img = function (el) {
    var image = canvas.toDataURL("image/jpg");
    el.href = image;
};


window.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        var canvas = document.querySelector("canvas");
        var image = canvas.toDataURL();
        var downloadLink = document.createElement('a');
        downloadLink.download = 'canvas_image.png';
        downloadLink.href = image;
        downloadLink.click();
    }
});