//Items array
const items = [
    { id: "alien", url: "./img/alien1.png" },
    { id: "alien2", url: "./img/alien2.png" },
    { id: "asteroid", url: "./img/asteroid.png" },
    { id: "astronaut", url: "./img/astronaut.png" },
    { id: "earth", url: "./img/earth.png" },
    { id: "meteor", url: "./img/meteor.png" },
    { id: "galaxy", url: "./img/galaxy.png" },
    { id: "planet", url: "./img/planet.png" },
    { id: "rocket", url: "./img/rocket.png" },
    { id: "ufo", url: "./img/ufo.png" }
];

function createPictures(number) {
    let cards = [];
    for (let i = 0; i < number; i++) {
        cards.push(items[i]);
        cards.push(items[i]);
    }
    cards = shuffleArray(cards);
    createCards(cards);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let turn = 1;
let currentCard = "default";
function isPair(att) {
    console.log(att);
    console.log(currentCard);
    let open = document.querySelectorAll(`[card=${att}]`);
    let current = document.querySelectorAll(`[card=${currentCard}]`);
    if (turn == 2) {
        turn = 1;
        if (currentCard === att) {
            currentCard = "default";
        } else {
            console.log("diferentes");
            setTimeout(() => {
                for (let i = 0; i < 2; i++) {
                    open[i].classList.remove("flip");
                    current[i].classList.remove("flip");
                    currentCard = "default";
                }
            }, 500);
        }
    } else {
        turn = 2;
        currentCard = att;
        console.log(att);
    }
}


/* 
function checkMatch() {
    let card1 = openCards[0];
    let card2 = openCards[1];
    let cards = document.querySelectorAll(`[card="${card1}"], [card="${card2}"]`);

    if (card1 === card2) {
        openCards = [];
        checkGameCompletion();
    } else {
        setTimeout(() => {
            cards.forEach(card => card.classList.remove("flip"));
            openCards = [];
        }, 500);
    }
} */

/* function checkGameCompletion() {
    let matchedCards = document.querySelectorAll(".flivp");
    if (matchedCards.length === items.length * 2) {
        console.log("Game completed!");
        return true;
    }
    return false;
} */