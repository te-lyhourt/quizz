const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choice-text'));
const porgressText = document.querySelector('#porgressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswer = true
let score = 0
let quesrtionCounter = 0
let availableQuestion = []


let questions = [
    {
        question : 'what is 2 + 2 ?',
        choice1 : '2',
        choice2 : '4',
        choice3 : '17',
        choice4 : '21',
        answer :2,
    },
    {
        question : 'what is 2 + 4 ?',
        choice1 : '22',
        choice2 : '6',
        choice3 : '17',
        choice4 : '21',
        answer :2,
    },
    {
        question : 'what is 100% - 4% ?',
        choice1 : '2aa',
        choice2 : '96%',
        choice3 : 'aaa',
        choice4 : '21',
        answer :2,
    },  
    {
        question : 'what is 23 + 2 ?',
        choice1 : '2',
        choice2 : '25',
        choice3 : '17',
        choice4 : '21',
        answer :2,
    },
]

const SCORE_POINS = 100
const MAX_QUESTION = 4

startGame = () =>{
    questionCounter = 0
    score = 0
    availableQuestion = [...question]
    getNewQuestion()
}

getNewQuestion = () =>{
    if(availableQuestion.length===0 || quesrtionCounter > MAX_QUESTION){
        localStorage.setItem('mostRecentScore',score);

        return window.location('/end.html');
    }
    questionCounter++
    porgressText.innerHTML = `Question ${quesrtionCounter} of ${MAX_QUESTION}`
    progressBarFull.style.width = `${(quesrtionCounter/MAX_QUESTION)*100}%` 

    const questionIndex = Math.floor(Math.random() * availableQuestion.length)
    currentQuestion = availableQuestion(questionIndex)
    question.innerHTML = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerHTML = currentQuestion['choice'+number]
    })

    availableQuestion.splice(questionIndex,1)
    acceptingAnswer = true
}

choices.forEach(choice =>{
    choice.addEventListener('click',e=>{
        if(!acceptingAnswer) return 
        acceptingAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct':
        'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        },1000)
    })
})

incrementScore = num =>{
    score +=num
    scoreText.innerHTML = score

}

startGame()