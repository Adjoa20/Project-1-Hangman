// alert("JS Linked")

// DEFINE THE VARIABLES TO GET THE ELEMENTS 
const gameContainer = document.getElementById('alphabet-key')
const showAnswer = document.getElementById('hold')

const userCategory = document.getElementById('categories')
const resultText = document.getElementById('result-text')

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
function select5(){
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
