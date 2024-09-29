let h2 = document.querySelector('h2');
let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;

document.addEventListener("touchstart", function () {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});
document.addEventListener("click", function () {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let r = Math.floor(Math.random() * 4);
    let randColor = btns[r];

    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function gameFlash(btn) {
    btn.classList.add("white");
    setTimeout(() => {
        btn.classList.remove("white");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("black");
    setTimeout(() => {
        btn.classList.remove("black");
    }, 250);
}

function checkAns(indx) {
    if (gameSeq[indx] === userSeq[indx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerText = `Game Over. Your Score was ${level} \n Tap to start again`;
        let body = document.querySelector('body');
        body.classList.add('redd');
        setTimeout(function () {
            body.classList.remove('redd');
        }, 250);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);

    btn.addEventListener("touchstart", btnPress);
}

function reset() {
    started = false;  
    gameSeq = [];
    userSeq = [];
    level = 0;
}