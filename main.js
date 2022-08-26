let score = 0;
let correct_answer = "ueee!"

const cat_button = document.getElementById("cat-button");
const baby_button = document.getElementById("baby-button");
const replay_button = document.getElementById("replay");
const score_text = document.getElementById("score");
const result_text = document.getElementById("result");
const start_game = document.getElementById("start-game");
const main = document.getElementById("main");
const audio = new Audio();
audio.src = "sounds/cat.wav";

start_game.onclick = () => {
    main.style.display = '';
    start_game.style.display = 'none';
    new_round();
}

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

const new_round = () => {
    let rnd = Math.floor(Math.random() * 100) % 2;
    if (rnd == 1) {
        audio.src = "sounds/cat/" + Math.floor(Math.random() * 4) + ".wav";
        correct_answer = "cat";
    } else {
        audio.src = "sounds/baby/" + Math.floor(Math.random() * 4) + ".wav";
        correct_answer = "baby";
    }
    audio.play();
};

const choose = (selection) => {
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

const change_result_color = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    result_text.style.color = randomColor;
};