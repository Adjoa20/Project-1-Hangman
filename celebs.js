// ANSWER AND HINTS FOR CELEBS GAME
const celebsList = [
    {
        answer: 'Justin Bieber',
        hint: 'This artist 33 Guiness World Records',
    },
    {
        answer: 'Michael Jackson',
        hint: 'Won 8 Grammy Awards in one year',
    },
    {
        answer: 'Nicki Minaj',
        hint: 'Won Best Female Hip-Hop artist at the BET awards for 7 years in a row',
    },
    {
        answer: 'Drake',
        hint: 'DeGrassi The Next Generstion',
    },
    {
        answer: 'Elon Musk',
        hint: 'Pretoria, South Africa',
    },
    {
        answer: 'Eminem',
        hint: 'Won an Academy Award for Best Original Song',
    }
]

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
const showClue = document.getElementById("clue")

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
function getRandomCelebsAns() {
    return celebsList[Math.floor(Math.random() * celebsList.length)];
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
        alert("Over");
        resetGame();
        return;
      }
    }
  
    for (let i = 0; i < underscoresContainer.children.length; i++) {
      if (underscoresContainer.children[i].textContent === "_") {
        return;
      }
    }
    alert("Win");
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
    const { answer, hint } = getRandomCelebsAns();
    correctAnswer = answer;
  
    hintButton.addEventListener("click", (event) => {
      showClue.innerText = "CLUE: " + `${hint}`;
    });
  }
  
  
  getRandomWord();
  displayUnderscores();