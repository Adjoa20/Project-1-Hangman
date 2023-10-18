// FUNCTION FOR THE ALPHABET TO WORK 
const alphabetKey = document.querySelector('.alphabet-key')
for (let i = 65; i <= 90; i++){
    const button = document.createElement('button')
    button.innerText = String.fromCharCode(i)
    alphabetKey.appendChild(button)
}
