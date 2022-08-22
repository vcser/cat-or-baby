let score = 0;
let correct_answer = "ueee!"

const cat_button = document.getElementById("cat-button");
const baby_button = document.getElementById("baby-button");
const replay_button = document.getElementById("replay");
const score_text = document.getElementById("score");
const result_text = document.getElementById("result");
let audio = new Audio();
audio.src = "sounds/cat.wav";

window.addEventListener("load", () => {
    console.log("cargado");
    new_round();
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
        result_text.innerText = "Correct!";
        change_result_color();
    } else {
        score = 0;
        result_text.innerText = "Wrong!";
        result_text.style.color = "red";
    }
    score_text.innerText = "Score = " + score;
    new_round();
}

let change_result_color = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    result_text.style.color = randomColor;
};