// ANSWERS AND HONTS 
const musicList = [ 
    {
        answer: 'New Orleans',
        hint: 'Jazz originated in which city in the United States?',
    },
    {
        answer: 'Swing',
        hint: 'What is the term used to describe the rhythmic pattern in jazz that emphasizes the offbeats?',
    },
    {
        answer: 'Jay-Z',
        hint: 'The Black Album was released by which artist?',
    },
    {
        answer: 'Beyonce',
        hint: 'This R&B Diva was born in the city of Houston and apart of the 1990s girl group ',
    },
    {
        answer: 'Kendrick Lamar',
        hint: 'Which hip-hop artist is the first to have won a Pulitzer Prize?',
    },
    {
        answer: 'Beastie Boys',
        hint: 'Hello Nasty was an album by which hip-hop band formed in 1981?',
    },
    {
        answer: 'Redman',
        hint: 'Which of these was not an official part of Wu Tang Clan/s nine members?',
    }
]

// COUNTING THE USER'S LIVES
let correctAnswer = "";
let userLives = 10;
let winCount = 0;

// DEFINING THE ELEMENTS
const alphabetKey = document.querySelector(".alphabet-key");
const displayLetter = document.getElementById("display-letter");
const hintButton = document.getElementById("hint");
const hintContainer = document.getElementById("hintContainer");
const answerContainer = document.getElementById("answerContainer");
const underscoresContainer = document.getElementById("underscoresContainer");
const userLivesDisplay = document.getElementById("userLives");
const winCountDisplay = document.getElementById("winCount");
const livesSpan = document.getElementById("lives");
const currentHint = "";
const showClue = document.getElementById("clue")
