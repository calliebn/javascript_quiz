const startButton = document.getElementById('start')
const questionsElement = document.getElementById('questions')
const qElement = document.getElementById('question-title')
const answerElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

var timeInterval
let timerElement = document.getElementById('time')
let clock = 60

let endEl = document.getElementById('end-screen')

startButton.addEventListener('click', startGame)

function startGame() {
startButton.classList.add('hide')
timeInterval = setInterval(function () { 
    timerElement.textContent = clock;
    clock--
    //If time runs out, stop the clock
    if (clock<=0) {
        clearInterval(timeInterval);
        endEl.classList.remove('hide')
        questionsElement.classList.add('hide')
    }
} , 1000);
shuffledQuestions = question.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionsElement.classList.remove('hide')
setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    qElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerElement.appendChild(button)
    })

}

function resetState() {
    while (answerElement.firstChild) {
        answerElement.removeChild
        (answerElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    //Moving to the next question
    currentQuestionIndex++
    if (currentQuestionIndex==question.length) {
        endEl.classList.remove('hide')
        questionsElement.classList.add('hide')
        clearInterval(timeInterval)
    } else {
        //Moves questions forward
        showQuestion(question[currentQuestionIndex])
    }

}

const question = [
    {
        question: "What is question 1?",
        answers: [
            { text: 'Correct Answer', correct: true },
            { text: 'Wrong Answer 1', correct: false },
            { text: 'Wrong Answer 2', correct: false },
            { text: 'Wrong Answer 3', correct: false }

        ]
    },

    {
        question: "What is question 2?",
        answers: [
            { text: 'Correct Answer', correct: true },
            { text: 'Wrong Answer 1', correct: false },
            { text: 'Wrong Answer 2', correct: false },
            { text: 'Wrong Answer 3', correct: false }

        ]
    },

    {
        question: "What is question 3?",
        answers: [
            { text: 'Correct Answer', correct: true },
            { text: 'Wrong Answer 1', correct: false },
            { text: 'Wrong Answer 2', correct: false },
            { text: 'Wrong Answer 3', correct: false }

        ]
    }
]