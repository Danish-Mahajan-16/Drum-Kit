// for(let i = 0; i < document.querySelectorAll(".btn").length; i++){
//     document.querySelectorAll(".btn")[i].addEventListener("click", myFunc);
// }


// General function to play sound on specific cases
function makeSound(parameter){
    let audio;
    switch(parameter){
        case "a":
            audio = new Audio("drum-sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("drum-sounds/kick-bass.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("drum-sounds/snare.mp3");
            audio.play();
            break;
        case "h":
            audio = new Audio("drum-sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("drum-sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("drum-sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("drum-sounds/tom-4.mp3");
            audio.play();
            break;
    }
}

// Buttons make Sound when pressed
let drumNumber = 0;
while(drumNumber<document.querySelectorAll(".btn").length){
    document.querySelectorAll(".btn")[drumNumber].addEventListener("click", function () {
            let buttonHTML = this.innerHTML;
            makeSound(buttonHTML);
    });
    drumNumber++;
}

// Function to play sounds using keys
function pressedKey(event){
    let key = event.key;
    makeSound(key);
    
}

// Sounds are played when relevant keys are pressed
document.addEventListener("keydown", pressedKey)