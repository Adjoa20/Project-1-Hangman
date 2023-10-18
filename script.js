// alert("JS Linked")

// NEED TO COUNT THE NUMBER OF WINS
let correctAnswer = ''
let selectHint= ''
let userLives= 10
let input = []
let checkWin = []

// DEFINE THE VARIABLES TO GET THE ELEMENTS 
const gameContainer = document.getElementById('alphabet-key')
const showAnswer = document.getElementById('hold')
const showClues = document.getElementById('clue')
const hintButton = document.getElementById('hint')
const userLifeSpan = document.getElementById('yourlives')
const playAgaiButton = document.getElementById('game-over')
const userCategory = document.getElementById('categories')
const resultText = document.getElementById('result-text')


// ANSWERS FOR THE CATEGORIES - MADE AN ARRAY WITHIN A METHOD, WHEN USER CLICKS ON THE CATEGORY - THOSE WILL THE WORDS ASSOICATED 
const categories = {
    Fashion: ['Coco Chanel', 'Namoi Campbell', 'Ralph Lauren', 'Bandana', 'Calvin Klien', 'Levi Strauss'],
    Music: ['New Orleans', 'Swing', 'Jay-Z', 'Beyonce', 'Kendrick Lamar', 'Beastie Boys', 'Redman' ],
    Movies: ['American Psycho', 'Paranormal Activiy', 'Midsommar', 'Dawn Of The Dead', 'Psycho', 'Alien'],
    TVShows: ['Twin Peaks', 'Bobs Burgers', 'Shamless', 'Futurama', 'Parks & Recreation', '30 Rock'],
    Celebs: ['Justin Bieber', 'Michael Jackson', 'Nicki Minaj', 'Drake', 'Elon Musk', 'Eminem']
}

const hints = {
    fashionHint:['Which designer created the little black dress?','She became the first black model to appear on the cover of French Vogue.','Which fashion designer has a brand called Rugby?',' What item of clothing was Axel Rose from Guns N Roses known for donning?','The world/s biggest selling brand of men/s underwear is?','Who invented jeans?'],
    musicHint:['Jazz originated in which city in the United States?','What is the term used to describe the rhythmic pattern in jazz that emphasizes the offbeats?','The Black Album was released by which artist?','This R&B Diva was born in the city of Houston and apart of the 1990s girl group ','Which hip-hop artist is the first to have won a Pulitzer Prize?','Hello Nasty was an album by which hip-hop band formed in 1981?','Which of these was not an official part of Wu Tang Clan/s nine members?'],
    moviesHint:['In what movie does someone get hit in the face with an ax while listening to “Hip to Be Square”?','Which horror movie was filmed in just 7 days?','In which horror film do a group of American students get involved in a Swedish cult?','Which George A. Romero movie takes places in a mall?','What horror movie features a serial killer named Norman Bates?','Which sci fi horror film had the tagline In space no one can hear you scream?'],
    tvHint:['An FBI agent investigates the death of Laura Palmer in a bizarre small town.','An unusual family runs a restaurant near the Wonder Wharf amusement park.','Alcoholic Frank Gallagher tries to cope with his six children.','A delivery boy from the 21st century is frozen and wakes up in the 31st century.','Amy Poehler plays a public official in the fictional town of Pawnee, Indiana.','Alec Baldwin won the Emmy for Best Actor Comedy Series twice for which TV show?'],
    celebsHint:['This artist 33 Guiness World Records','Won 8 Grammy Awards in one year','Won Best Female Hip-Hop artist at the BET awards for 7 years in a row','DeGrassi The Next Generstion','Pretoria, South Africa']
}

// FUNCTION TO SET THE ANSWERS FOR THE CATEGORY
const createAnswer = () => {
    let categoriesButton = document.querySelectorAll('.category')
    categoriesButton.forEach((button) =>{
        if (button.innerText.toUpperCase() === categoriesInput){
            button.classList.add('active')
        }
        button.disabled = true
    })
}

// CREATE A DISPLAY FOR THE ANSWERS 

// FUNCTION TO SHOW HINT 
function createHint(){
    showClues.innerHTML = `Clue: ${hint}`
}
hintButton.addEventListener('click', createHint)
createHint()
    


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


