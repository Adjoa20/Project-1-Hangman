// ANSWER AND HINT FOR THE GAME
const fashionList = [
  {
    answer: "CocoChanel",
    hint: "Which designer created the little black dress?",
  },
  {
    answer: "NaomiCampbell",
    hint: "She became the first black model to appear on the cover of French Vogue.",
  },
  {
    answer: "RalphLauren",
    hint: "Which fashion designer has a brand called Rugby?",
  },
  {
    answer: "Bandana",
    hint: "What item of clothing was Axel Rose from Guns N Roses known for donning?",
  },
  {
    answer: "CalvinKlien",
    hint: "The worlds biggest selling brand of men/s underwear is?",
  },
  { answer: "LeviStrauss", hint: "Who invented jeans?" },
];

// COUNTING THE USER'S LIVES
let correctAnswer = "";
let userLives = 10;
let winCount = 0;

// DEFINING THE ELEMENTS
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

// CREATING ALPHABETS AND ADDING LISTENERS
for (let i = 65; i <= 90; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  alphabetKey.appendChild(button);

  button.addEventListener("click", (event) => {
    // const clickedButton = event.target
    // const clickedLetter = clickedButton.innerText
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
function getRandomFashionAns() {
  return fashionList[Math.floor(Math.random() * fashionList.length)];
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

  // displayUnderscores()

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
  const { answer, hint } = getRandomFashionAns();
  correctAnswer = answer;

  hintButton.addEventListener("click", (event) => {
    hintContainer.innerText = " " + `${hint}`;
  });
}


getRandomWord();
displayUnderscores();
