// ANSWER AND HINTS FOR MOVIES GAMES
movieList = [
    {
        answer: 'American Psycho',
        hint: 'In what movie does someone get hit in the face with an ax while listening to “Hip to Be Square”?',
    },
    {
        answer: 'Paranormal Activiy',
        hint: 'Which horror movie was filmed in just 7 days?',
    },
    {
        answer: 'Midsommar',
        hint: 'In which horror film do a group of American students get involved in a Swedish cult?',
    },
    {
        answer: 'Dawn Of The Dead',
        hint: 'Which George A. Romero movie takes places in a mall?',
    },
    {
        answer: 'Psycho',
        hint: 'What horror movie features a serial killer named Norman Bates?',
    },
    {
        answer: 'Alien',
        hint: 'Which sci fi horror film had the tagline In space no one can hear you scream?',
    },
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
function getRandomMovieAns() {
    return movieList[Math.floor(Math.random() * movieList.length)];
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
    const { answer, hint } = getRandomMovieAns();
    correctAnswer = answer;
  
    hintButton.addEventListener("click", (event) => {
      showClue.innerText = "CLUE: " + `${hint}`;
    });
  }
  
  // GAME OVER POP UP FUNCTION 
function openPlayAgainModal(){
  const modal = document.getElementById("playAgainModal")
  modal.style.display = "block"
}

function closePlayAgainModal(){
  const modal = document.getElementById("playAgainModal")
  modal.style.display = "none"
}

  
  getRandomWord();
  displayUnderscores();