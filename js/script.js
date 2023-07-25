const LEVELS = {
    easy: { gridSize: 6, imagesCount: 3 },
    medium: { gridSize: 16, imagesCount: 8 },
    hard: { gridSize: 20, imagesCount: 10 }
  };

  

//Items array

const items = [
    {'',0,URL},{'',1,URL}, {'',2,URL}, {'',3,URL}, {'',4,URL}, {'',5,URL}, {'',6,URL}, {'',7,URL}, {'',8,URL}, {'',9,URL}];


// Variable to keep track of the game state

let cards = [];
let matchedCards = [];
let flippedCards = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }