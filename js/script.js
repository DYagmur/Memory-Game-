// Items array
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
    { id: "ufo", url: "./img/ufo.png" },
];

// Function to create pairs of pictures based on the provided number
function createPictures(number) {
    let cards = [];
    let i = 0;
    while (i < number) {
        cards.push(items[i]);
        cards.push(items[i]);
        i++;
    }
    cards = shuffleArray(cards);
    createCards(cards);
}

// Function to shuffle the elements of an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let turn = 1;
let currentCard = "default";

// Function to handle card matching
function isPair(att) {
    let open = document.querySelectorAll(`[card=${att}]`);
    let current = document.querySelectorAll(`[card=${currentCard}]`);
    if (turn == 2) {
        turn = 1;
        if (currentCard === att) {
            currentCard = "default";
        } else {
            // Delay card flipping if the second card is not a match
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
    }
    // Check if the game is completed and perform necessary actions
    if (checkGameCompletion()) {
        stop();
        setScore();
    }
}

// Function to check if the game is completed.
function checkGameCompletion() {
    let matchedCards = document.querySelectorAll(".card");
    let completed = true;

    for (let i = 0; i < matchedCards.length; i++) {
        if (!matchedCards[i].classList.contains("flip")) {
            completed = false;
        }
    }
    return completed;
}
