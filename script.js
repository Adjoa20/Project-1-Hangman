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
let userCategory = document.getElementById('categories').value
let userWord = document.getElementById(userCategory)

// FUNCTION TO SHOW THE LINES FOR THE LETTER SELECTED 
let  answerDisplay = '_'.repeat(userWord.length)
document.getElementById(letter-display).innerText = answerDisplay

// FUNCTION FOR THE USER TO GET A RANDOM WORD 
function getRandomWord(category){
    const answer = categories(category);
    return answer[Math.floor(Math.random() * answer.length)]
}

// LETTER GUESSES 
function guessABC(){
    const userInput = document.getElementById('userInput')
    const guess = userInput.value.toUpperCase()

    if(!guess.match(/^[a-z]$/) || answerDisplay.includes(guess)){
        document.getElementById('message'.innerText = 'Try Again');
        return
    }
}

// FUNCTION TO INPUT USER NAME
function submitFunction(){
   let userInput = document.querySelector('#userInput')
   let message = document.querySelector('#message')

    message.innerHTML = 'Welcome To Hangman ' + userInput.value
}


