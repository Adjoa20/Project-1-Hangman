// ANSWERS AND HONTS
const musicList = [
  {
    answer: "New Orleans",
    hint: "Jazz originated in which city in the United States?",
  },
  {
    answer: "Swing",
    hint: "What is the term used to describe the rhythmic pattern in jazz that emphasizes the offbeats?",
  },
  {
    answer: "Jay-Z",
    hint: "The Black Album was released by which artist?",
  },
  {
    answer: "Beyonce",
    hint: "This R&B Diva was born in the city of Houston and apart of the 1990s girl group ",
  },
  {
    answer: "Kendrick Lamar",
    hint: "Which hip-hop artist is the first to have won a Pulitzer Prize?",
  },
  {
    answer: "Beastie Boys",
    hint: "Hello Nasty was an album by which hip-hop band formed in 1981?",
  },
  {
    answer: "Redman",
    hint: "Which of these was not an official part of Wu Tang Clan/s nine members?",
  },
];

// COUNTING THE USER'S LIVES
let correctAnswer = "";
let userLives = 10;
let winCount = 0;

// DEFINING THE ELEMENTS AND VARIABLES
const alphabetKey = document.querySelector(".alphabet-key");
const displayLetter = document.getElementById("display-letter");
const hintButton = document.getElementById("hint");
const hintContainer = document.getElementById("hintContainer");
const answerContainer = document.getElementById("answerContainer");
const underscoresContainer = document.getElementById("underscoresContainer");
const userLivesDisplay = document.getElementById("userLives");
const winCountDisplay = document.getElementById("winCount");
const livesSpan = document.getElementById("lives");
const currentHint = "";
const showClue = document.getElementById("clue");

// CREATING ALPHABETS AND ADDING LISTENERS
for (let i = 65; i <= 90; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  alphabetKey.appendChild(button);

  button.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    const letterArray = underscoresContainer.children;
    let foundLetter = false;
    for (let i = 0; i < correctAnswer.length; i++) {
      if (event.target.innerText === correctAnswer[i].toUpperCase()) {
        foundLetter = true;
        letterArray[i].innerText = correctAnswer[i].toUpperCase();
        console.log(correctAnswer[i]);
        console.log(event.target.value);
      }
    }
    handleGuess(foundLetter);
  });
}

// FUNCTION FOR A RANDOM ANS
function getRandomMusicAns() {
  return musicList[Math.floor(Math.random() * musicList.length)];
}

// FUNCTION TO DISPLAY UNDERSCORES WITH ANSWERS
function displayUnderscores() {
  const word = correctAnswer.toLowerCase();
  let displayText = "";
  for (const letter of word) {
    if (letter === " ") {
      displayText = " ";
    } else {
      displayText = "_";
    }
    let letterDiv = document.createElement("div");
    letterDiv.innerText = displayText;
    underscoresContainer.appendChild(letterDiv);
  }
}

function handleGuess(isFoundLetter) {
  if (!isFoundLetter) {
    userLives--;
    livesSpan.innerText = userLives;
    if (userLives === 0) {
      openPlayAgainModal();
      resetGame();
      return;
    }
  }

  for (let i = 0; i < underscoresContainer.children.length; i++) {
    if (underscoresContainer.children[i].textContent === "_") {
      return;
    }
  }
  alert("YOU WON");
  winCount++;
  winCountDisplay.innerText = "Wins: " + winCount;
  resetGame();
  console.log(underscoresContainer);
}

// RESET THE GAME
function resetGame() {
  correctAnswer = "";
  userLives = 10;
  livesSpan.innerText = userLives;
  displayLetter.innerText = "";
  underscoresContainer.innerHTML = "";
  getRandomWord();
  displayUnderscores();
}

// GET ANSWER WITH HINT
function getRandomWord() {
  const { answer, hint } = getRandomMusicAns();
  correctAnswer = answer;

  hintButton.addEventListener("click", (event) => {
    showClue.innerText = "CLUE: " + `${hint}`;
  });
}

// GAME OVER POP UP FUNCTION
function openPlayAgainModal() {
  const modal = document.getElementById("playAgainModal");
  modal.style.display = "block";
}

function closePlayAgainModal() {
  const modal = document.getElementById("playAgainModal");
  modal.style.display = "none";
}

getRandomWord();
displayUnderscores();
