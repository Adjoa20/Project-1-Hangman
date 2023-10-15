// alert("JS Linked")

// 

// ANSWERS TO THE HINTS 
// Fashion = 'Coco Chanel', 'Namoi Campbell', 'Ralph Lauren', 'Bandana', 'Calvin Klien', 'Levi Strauss'
// Music = 'New Orleans', 'Swing', 'Jay-Z', 'Beyonce', 'Kendrick Lamar', 'Beastie Boys', 'Redman' 
// Movies = 'American Psycho', 'Paranormal Activiy', 'Midsommar', 'Dawn Of The Dead', 'Psycho', 'Alien'
// TVShows  = 'Twin Peaks', 'Bobs Burgers', 'Shamless', 'Futurama', 'Parks & Recreation', '30 Rock'
// Celebs = 'Justin Bieber', 'Michael Jackson', 'Nicki Minaj', 'Drake', 'Elon Musk', 'Eminem'


// ANSWERS FOR THE CATEGORIES - MADE AN ARRAY WITHIN A METHOD, WHEN USER CLICKS ON THE CATEGORY - THOSE WILL THE WORDS ASSOICATED 
const categories = {
    Fashion: ['Coco Chanel', 'Namoi Campbell', 'Ralph Lauren', 'Bandana', 'Calvin Klien', 'Levi Strauss'],
    Music: ['New Orleans', 'Swing', 'Jay-Z', 'Beyonce', 'Kendrick Lamar', 'Beastie Boys', 'Redman' ],
    Movies: ['American Psycho', 'Paranormal Activiy', 'Midsommar', 'Dawn Of The Dead', 'Psycho', 'Alien'],
    TVShows: ['Twin Peaks', 'Bobs Burgers', 'Shamless', 'Futurama', 'Parks & Recreation', '30 Rock'],
    Celebs: ['Justin Bieber', 'Michael Jackson', 'Nicki Minaj', 'Drake', 'Elon Musk', 'Eminem']
}

// DEFINE THE VARIABLES 
const alphabetKey = document.getElementById('alphabet-key')
const categoriesSelction = document.getElementById('category')
const userSelection = document.getElementById('user-selection')
const playGame = document.getElementById('play-again')
const gameOverButton = document.getElementById('game-over')
const resultText = document.getElementById('result-text')

// NEED TO COUNT THE NUMBER OF WINS
let correctAnswer = 0
let correct = 0

let selectChoice = ''

// FUNCTION TO INPUT USER NAME
function submitFunction(){
   let userInput = document.querySelector('#userInput')
   let message = document.querySelector('#message')

    message.innerHTML = 'Welcome To Hangman ' + userInput.value
}


// FUNCTION WHEN USER SELECTS TO PLAY AGAIN 
const newGame = () => {
    correctAnswer = 0;
    correct = 0
}

gameOverButton.addEventListener('click', newGame)
window.onload = newGame

