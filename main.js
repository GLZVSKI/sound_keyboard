let castomButtons = new Map([
    ['Backspace', 'Backspace'],
    ['Enter', 'Enter'],
    ['Space', 'Space'],
]);

let step = 1;

document.onkeydown = function (e) {
    let sound = new Audio();
    let button = castomButtons.get(e.code);

    if(button) {
        sound.src = getUrl("sound/"+ button +".mp3");
    }else{
        sound.src = getUrl("sound/"+ step +".mp3");
        step = step >= 3 ? 1 : ++step;
    }
    
    sound.play();
}

function getUrl(url) {
    return chrome.extension.getURL(url);
}