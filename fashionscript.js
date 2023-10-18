// FUNCTION FOR THE ALPHABET TO WORK 
const alphabetKey = document.querySelector('.alphabet-key')

for (let i = 65; i <= 90; i++){
    const button = document.createElement('button')
    button.innerText = String.fromCharCode(i)
    alphabetKey.appendChild(button)
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
      hint: 'The world/s biggest selling brand of men/s underwear is?',
    },
    { answer: 'Levi Strauss',
      hint: 'Who invented jeans?',
    },
]

// FASHION ANSWERS AND HINTS 
const fashionAns = () => {
    const { answer, hint} = fashionList[Math.floor(Math.random() * fashionList.length)]
    console.log(answer, hint)
}

fashionAns()


