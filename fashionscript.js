// NEED TO COUNT THE NUMBER OF WINS
let correctAnswer = ''
let selectHint= ''
let userLives= 10
let input = []
let checkWin = []

// FUNCTION FOR THE ALPHABET TO WORK / ADDED IN LISTENERS
const alphabetKey = document.querySelector('.alphabet-key')
const displayLetter = document.getElementById('display-letter')

for (let i = 65; i <= 90; i++){
    const button = document.createElement('button')
    button.innerText = String.fromCharCode(i)
    alphabetKey.appendChild(button)

    button.addEventListener('click', (event) => {
        const clickedButton = event.target
        const clickedLetter = clickedButton.innerText
        console.log('Clicked')

        displayLetter.innerText = '' +  clickedLetter
    })
}

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

// FASHION ANSWERS AND HINTS 
const getRandomFashionAns = () => {
    return fashionList[Math.floor(Math.random() * fashionList.length)]
}
getRandomFashionAns()

// SHOWING THE HINTS 
const hintButton = document.getElementById('hint')
const hintContainer = document.getElementById('hintContainer')

hintButton.addEventListener('click', () => {
    const {hint} = getRandomFashionAns()
    hintContainer.innerText = ' ' + `${hint}`
})

// START THE GAME 


