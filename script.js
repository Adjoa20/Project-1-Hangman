// alert("JS Linked")

// 

// ANSWERS TO THE HINTS 
// Fashion = 'Coco Chanel', 'Namoi Campbell', 'Ralph Lauren', 'Bandana', 'Calvin Klien', 'Levi Strauss'
// Music = 'New Orleans', 'Swing', 'Jay-Z', 'Beyonce', 'Kendrick Lamar', 'Beastie Boys', 'Redman' 
// Movies = 'American Psycho', 'Paranormal Activiy', 'Midsommar', 'Dawn Of The Dead', 'Psycho', 'Alien'
// TVShows  = 'Twin Peaks', 'Bobs Burgers', 'Shamless', 'Futurama', 'Parks & Recreation', '30 Rock'
// Celebs = 'Justin Bieber', 'Michael Jackson', 'Nicki Minaj', 'Drake', 'Elon Musk', 'Eminem'


// ANSWERS FOR THE CATEGORIES - MADE AN ARRAY WITHIN A METHOD, WHEN USER CLICKS ON THE CATEGORY - THOSE WILL THE WORDS ASSOICATED 
let answers = {
    Fashion: ['Coco Chanel', 'Namoi Campbell', 'Ralph Lauren', 'Bandana', 'Calvin Klien', 'Levi Strauss'],
    Music: ['New Orleans', 'Swing', 'Jay-Z', 'Beyonce', 'Kendrick Lamar', 'Beastie Boys', 'Redman' ],
    Movies: ['American Psycho', 'Paranormal Activiy', 'Midsommar', 'Dawn Of The Dead', 'Psycho', 'Alien'],
    TVShows: ['Twin Peaks', 'Bobs Burgers', 'Shamless', 'Futurama', 'Parks & Recreation', '30 Rock'],
    Celebs: ['Justin Bieber', 'Michael Jackson', 'Nicki Minaj', 'Drake', 'Elon Musk', 'Eminem']

}

// DEFINING THE CORRECT OR INCORRECT LETTERS SELECTED 
const rightLetters = []
const wrongLettersChoses = []

// DEFINED THE VARIBALES NEEDED FOR THE GAME
const alphabetKey = document.getElementById('alphabet-key')
const userSelection = document.getElementById('user-selection')
const playAgain = document.getElementById('play-again')
const resultText = document.getElementById('result-text')

// USERS LIFE COUNT / WIN COUNT 
let correctAnswer = 0
let userCount = 0

let selectedLetter = ''

// FUNCTION TO INPUT USER NAME
function submitFunction(){
   let userInput = document.querySelector('#userInput')
   let message = document.querySelector('#message')

    message.innerHTML = 'Welcome To Hangman ' + userInput.value
}


