// ANSWER AND HINT FOR THE GAME 
const fashionList = [
    { answer: 'Coco Chanel',
      hint: 'Which designer created the little black dress?',
    },
    { answer: 'Namoi Campbell',
      hint: 'She became the first black model to appear on the cover of French Vogue.',
    },
    { answer: 'Ralph Lauren',
      hint: 'Which fashion designer has a brand called Rugby?',
    },
    { answer: 'Bandana',
      hint: 'What item of clothing was Axel Rose from Guns N Roses known for donning?',
    },
    { answer: 'Calvin Klien',
      hint: 'The worlds biggest selling brand of men/s underwear is?',
    },
    { answer: 'Levi Strauss',
      hint: 'Who invented jeans?',
    },
]


// COUNTING THE USER'S LIVES
let correctAnswer= ''
let userLives = 10
let winCount = 0

// DEFINING THE ELEMENTS 
const alphabetKey = document.getElementById('alphabetKey')
const displayLetter = document.getElementById('display-letter')
const hintButton = document.getElementById('hint')
const hintContainer = document.getElementById('hintContainer')
const answerContainer = document.getElementById('answerContainer')
const underscoresContainer = document.getElementById('underscoresContainer')
const userLivesDisplay = document.getElementById('userLives')
const winCountDisplay = document.getElementById('winCount')

// CREATING ALPHABETS AND ADDING LISTENERS
for (let i = 65; i <= 90; i++){
    const button = document.createElement('button')
    button.innerText = String.fromCharCode(i)
    alphabetKey.appendChild(button)

    button.addEventListener('click', (event) => {
        const clickedButton = event.target 
        const clickedLetter = clickedButton.innerText
        handleGuess(clickedLetter)
    })
}