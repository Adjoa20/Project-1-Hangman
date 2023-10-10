// alert("JS Linked")

// 

// ANSWERS TO THE HINTS 
const fashionWords = ['Coco Chanel', 'Namoi Campbell', 'Ralph Lauren', 'Bandana', 'Calvin Klien', 'Levi Strauss']
const musicWords = ['New Orleans', 'Swing', 'Jay-Z', 'Beyonce', 'Kendrick Lamar', 'Beastie Boys', 'Redman' ]
const moviesWords = ['American Psycho', 'Paranormal Activiy', 'Midsommar', 'Dawn Of The Dead', 'Psycho', 'Alien']
const tvWords  = ['Twin Peaks', 'Bobs Burgers', 'Shamless', 'Futurama', 'Parks & Recreation', '30 Rock']
const celebsWord = ['Justin Bieber', 'Michael Jackson', 'Nicki Minaj', 'Drake', 'Elon Musk', 'Eminem']

let words = words[Math.floor(Math.random()* words.length)]

// FUNCTION TO START THE GAME 
function startGame(){

}

// FUNCTION TO MAKE THE BUTTONS CLICK - USER SHOULD BE ABLE TO SELECT THE LETTER 

//FUNCTION TO CREATE THE HINTS 

// THIS THE METHOD TO CREATE THE HANGMAN 

// CREATE THE ARRAY TO LOOP THE LETTERS 

// CREATE THE ARRAY TO LOOP THROUGH THE ANSWERS AT RANDOM
let answers = []
for (let i = 0; i < words.length; i++){
    answers[i] = '_'
} 

let letLeftOverLetters = words.length

// FUNCTION TO INPUT USER NAME
function submitFunction(){
   let userInput = document.querySelector("#userInput")
   let message = document.querySelector("#message")

    message.innerHTML = "Welcome To Hangman " + userInput.value
}
