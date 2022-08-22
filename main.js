let score = 0;
let correct_answer = "ueee!"

const cat_button = document.getElementById("cat-button");
const baby_button = document.getElementById("baby-button");
const replay_button = document.getElementById("replay");
let audio = new Audio();
audio.src = "sounds/cat.wav";

window.addEventListener("load", () => {
    console.log("cargado");
    // new_round();
    document.body.onmousemove = () => {
        audio.play();
        document.body.onmousemove = null;
    }
}, false);

cat_button.onclick = () => {
    console.log("cat!");
    choose("cat");
}

baby_button.onclick = () => {
    console.log("baby!");
    choose("baby");
}

replay_button.onclick = () => {
    audio.play();
}

let new_round = () => {
    let rnd = Math.floor(Math.random() * 100) % 2;
    if (rnd == 1) {
        audio.src = "sounds/cat.wav";
        correct_answer = "cat";
    } else {
        audio.src = "sounds/baby.wav";
        correct_answer = "baby";
    }
    audio.play();
};

let choose = (selection) => {
    if (selection == correct_answer) {
        score++;
    }
    new_round();
}