var numberofButtons = document.getElementsByClassName('drum').length;

for (var i=0; i< numberofButtons; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function click() {
        var whichCharacter= this.innerHTML;
        switchCalling(whichCharacter);
        buttonAnimation(whichCharacter);
    });
}
document.addEventListener('keypress', function (event) {
    var keyCharacter = event.key;
    switchCalling(keyCharacter);
    buttonAnimation(keyCharacter) 
});

function switchCalling( name) {
    switch (name) {
        case "w":
            crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default :
            console.log(event.key);
            break;
    }
}

function buttonAnimation (currentKey) {
    value = document.querySelector('.' + currentKey)
    value.classList.add("pressed");
    setTimeout( function () {
        value.classList.remove('pressed')
    }, 200);
}
