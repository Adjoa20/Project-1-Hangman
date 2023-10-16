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

const hints = {
    
}

// DEFINE THE VARIABLES 
const alphabetKey = document.getElementById('alphabet-key')
const categoriesSelction = document.getElementById('category')
const userSelection = document.getElementById('user-selection')
const playGame = document.getElementById('play-again')
const gameOverButton = document.getElementById('game-over')
const resultText = document.getElementById('result-text')

// NEED TO COUNT THE NUMBER OF WINS
let selectChoice = ''
let correctAnswer = 0
let correct = 0
let incorrectAnswer = 10
let input = []

// FUNCTION FOR THE ALHPABET TO WORK 
let buttons = document.querySelectorAll('.bttn')
for (let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        console.log(this.innerText + 'clicked')
    })
}


// FUNCTION TO INPUT USER NAME
function submitFunction(){
   let userInput = document.querySelector('#userInput')
   let message = document.querySelector('#message')

    message.innerHTML = 'Welcome To Hangman ' + userInput.value
}

// ADD IN FUNCTIONS FOR THE BUTTONS 
function select(){
    console.log('clicked')
}
function select1(){
    console.log('clicked')
}
function select2(){
    console.log('clicked')
}
function select3(){
    console.log('clicked')
}
function select4(){
    console.log('clicked')
}


// ADDED IN EVENT LISTENERS
const fashionButton = document.getElementById('fashion-button')
fashionButton.addEventListener('click', () => {
    select()
    alert('You Selected This Category')
})
const musicButton = document.getElementById('music-button')
musicButton.addEventListener('click', () => {
    select1()
    alert('You Selected This Category')
})
const moviesButton = document.getElementById('movies-button')
moviesButton.addEventListener('click', () => {
    select2()
    alert('You Selected This Category')
})
const tvButton = document.getElementById('tv-button')
tvButton.addEventListener('click', () => {
    select3()
    alert('You Selected This Category')
})
const celebritiesButton = document.getElementById('celebrities-button')
celebritiesButton.addEventListener('click', () => {
    select4()
    alert('You Selected This Category')
})



// FUNCTION WHEN USER SELECTS TO PLAY AGAIN 
const newGame = () => {
    correctAnswer = 0;
    correct = 0
}

gameOverButton.addEventListener('click', newGame)
window.onload = newGame

