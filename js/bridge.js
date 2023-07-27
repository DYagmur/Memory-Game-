function removeChilds() {
    let container = document.getElementById("game-board");
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function gameLevel(event) {
    let level = event.target.id;
    console.log(level);
    removeChilds();
    createPictures(level);
}
function createCards(arr) {
    let div, img1, img2;
    let timer = document.createElement("div");
    timer.id = "timer";
    timer.classList.add("timer");
    timer.innerHTML = "0";
    let boardGame = document.getElementById("game-board");
    let section = document.createElement("section");
    section.classList.add("game");
    for (const iterator of arr) {
        div = document.createElement("div");
        img1 = document.createElement("img");
        img2 = document.createElement("img");
        div.classList.add("card");
        div.addEventListener("click", flipCard);
        div.setAttribute("card", iterator.id);
        img1.classList.add("back");
        img1.src = "./img/back.png";
        img2.classList.add("front");
        img2.src = iterator.url;
        div.appendChild(img1);
        div.appendChild(img2);
        section.appendChild(div);
    }
    boardGame.appendChild(timer);
    boardGame.appendChild(section);
    window.scrollBy(0, window.innerHeight);
    start();
}

function reload() {
    removeChilds();
    let boardGame = document.getElementById("game-board");
    let section = document.createElement("section");
    section.classList.add("level-container");
    let h1, container, easy, medium, hard;
    h1 = document.createElement("h1");
    container = document.createElement("div");
    easy = document.createElement("div");
    medium = document.createElement("div");
    hard = document.createElement("div");
    h1.classList.add("level-text");
    h1.innerHTML = "Choose difficulty";
    container.id = "level";
    container.classList.add("level");
    easy.id = "4";
    easy.classList.add("diff");
    easy.classList.add("easy");
    easy.innerHTML = "Easy";
    easy.addEventListener("click", gameLevel);
    medium.id = "6";
    medium.classList.add("diff");
    medium.classList.add("medium");
    medium.innerHTML = "Medium";
    medium.addEventListener("click", gameLevel);
    hard.id = "10";
    hard.classList.add("diff");
    hard.classList.add("hard");
    hard.innerHTML = "Hard";
    hard.addEventListener("click", gameLevel);
    container.appendChild(easy);
    container.appendChild(medium);
    container.appendChild(hard);
    section.appendChild(h1);
    section.appendChild(container);
    boardGame.appendChild(section);
    window.scrollBy(0, window.innerHeight);
    stop();
}

let timer;
function start() {
    timer = setInterval(() => {
        let seconds = parseInt(document.getElementById("timer").innerHTML);
        seconds++;
        document.getElementById("timer").innerHTML = seconds;
    }, 1000);
}
function stop() {
    clearInterval(timer);
}
function setScore() {
    let currentTime = document.getElementById("timer").innerHTML;
    let arrayScore = getScore();
    console.log(arrayScore);
    arrayScore.pop();
    arrayScore.unshift(parseInt(currentTime));
    console.log(arrayScore);
    arrayScore = JSON.stringify(arrayScore);
    localStorage.setItem("score", arrayScore);
    if (parseInt(currentTime) < parseInt(getBestScore())) {
        localStorage.setItem("bestScore", currentTime);
    }
}
function getScore() {
    if (localStorage.getItem("score")) {
        const arrayScore = JSON.parse(localStorage.getItem("score"));
        return arrayScore;
    }
}
function getBestScore() {
    if (localStorage.getItem("bestScore")) {
        return localStorage.getItem("bestScore");
    }
}

function today() {
    let today = new Date();
    console.log(today);
    return (
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear()
    );
}

document.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem("score", "[0,0,0]");
    localStorage.setItem("bestScore", "100");
    document.getElementById("reload").addEventListener("click", reload);
    document.getElementById("4").addEventListener("click", gameLevel);
    document.getElementById("6").addEventListener("click", gameLevel);
    document.getElementById("10").addEventListener("click", gameLevel);
    document.getElementById('todaydate').innerHTML = today();
});
