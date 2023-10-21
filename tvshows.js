// ANSWER AND HINTS FOR TV SHOW GAME 
const tvShowsList = [
    {
        answer: 'Twin Peaks',
        hint: 'An FBI agent investigates the death of Laura Palmer in a bizarre small town.',
    },
    {
        answer: 'Bobs Burgers',
        hint: 'An unusual family runs a restaurant near the Wonder Wharf amusement park.',
    },
    {
        answer: 'Shamless',
        hint: 'Alcoholic Frank Gallagher tries to cope with his six children.',
    },
    {
        answer: 'Futurama',
        hint: 'A delivery boy from the 21st century is frozen and wakes up in the 31st century.',
    },
    {
        answer: 'Parks & Recreation',
        hint: 'Amy Poehler plays a public official in the fictional town of Pawnee, Indiana.',
    },
    {
        answer: '30 Rock',
        hint: 'Alec Baldwin won the Emmy for Best Actor Comedy Series twice for which TV show?',
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
function getRandomTvAns() {
    return tvShowsList[Math.floor(Math.random() * tvShowsList.length)];
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
    const { answer, hint } = getRandomTvAns();
    correctAnswer = answer;
  
    hintButton.addEventListener("click", (event) => {
      showClue.innerText = "CLUE: " + `${hint}`;
    });
  }
  
  
  getRandomWord();
  displayUnderscores();