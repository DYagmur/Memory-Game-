// Items array containing objects with id and image URLs
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
]

// Function to create duplicate picture based on the provided number
function createPictures(number) {
    let cards = []; // An array to store the card objects
    let i = 0;
    while (i < number) {
        cards.push(items[i]);  // Add the first card of the pair to the 'cards' array
        cards.push(items[i]);
        i++;
    }
    cards = shuffleArray(cards); // Shuffle the array to randomize card positions
    createCards(cards); // Call the function to create card elements on the page
}

// Function to shuffle the elements of an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index 'j' between 0 and 'i' 
        const j = Math.floor(Math.random() * (i + 1));  //math.random --> floating-point math.floor --> integer number.
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements at indices 'i' and 'j' to shuffle the array
    }
    return array;
}

let turn = 1; // Variable to track the current turn (1 or 2)
let currentCard = "default"; // Variable to store the ID of the currently selected card

// Function to handle card matching when clicked
function isPair(att) {
    let open = document.querySelectorAll(`[card=${att}]`); // Get all elements with the specified ID (att)
    let current = document.querySelectorAll(`[card=${currentCard}]`); // Get all elements with the ID of the currently selected card

    if (turn == 2) {  //check the which turn.
        turn = 1;
        if (currentCard === att) {
            currentCard = "default"; // If the same card is clicked again, reset the currentCard
        } else {
            // Delay card flipping if the second card is not a match
            setTimeout(() => {
                for (let i = 0; i < 2; i++) {
                    open[i].classList.remove("flip"); // Flip back the second card
                    current[i].classList.remove("flip"); // Flip back the first card
                    currentCard = "default"; // Reset the currently selected card
                }
            }, 500); // 500ms delay before flipping back
        }
    } else { //If the turn variable is 1, it means the user has not yet selected the second card, and the else block runs. 
        turn = 2;
        currentCard = att; // Store the ID of the first card clicked for comparison with the second card
    }

    // Check if the game is completed and perform necessary actions
    if (checkGameCompletion()) {
        stop(); // Stop the game 
        setScore(); // Set the score or perform other actions 
    }
}

// Function to check if the game is completed by checking if all cards are flipped
function checkGameCompletion() {
    let matchedCards = document.querySelectorAll(".card"); // Get all elements with the "card" class (representing all cards)
    let completed = true;

    for (let i = 0; i < matchedCards.length; i++) {
        if (!matchedCards[i].classList.contains("flip")) {
            completed = false; // If any card is not flipped  the game is not completed
        }
    }
    return completed;
}
