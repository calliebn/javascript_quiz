const startButton = document.getElementById('start')
const startScreen = document.getElementById('start-screen')
const questionsElement = document.getElementById('questions')
const qElement = document.getElementById('question-title')
const answerElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let countRightAnswers = 0
const finalScore = document.getElementById('final-score')

//Timer Variables
var timeInterval
let timerElement = document.getElementById('time')
let clock = 60

let endEl = document.getElementById('end-screen')


//Starts game
startButton.addEventListener('click', startGame)

function startGame() {
startButton.classList.add('hide')
startScreen.classList.add('hide')

//Starts the clock
timeInterval = setInterval(function () { 
    timerElement.textContent = clock;
    clock--
    //If time runs out, stop the clock
    if (clock < 0) {
        clearInterval(timeInterval);
        endEl.classList.remove('hide')
        questionsElement.classList.add('hide')
    }
} , 1000);

//Shows questions in a random order
shuffledQuestions = question.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionsElement.classList.remove('hide')
setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//Question and answer logic
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

//Stops buttons from duplicating
function resetState() {
    while (answerElement.firstChild) {
        answerElement.removeChild
        (answerElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    //Moving to the next question
    currentQuestionIndex++
    if (currentQuestionIndex==question.length) {
        endEl.classList.remove('hide')
        questionsElement.classList.add('hide')
        clearInterval(timeInterval)
        startScreen.classList.remove('hide')
        finalScore.innerHTML = clock +1
    } else {
        //Moves questions forward
        answerElement.innerHTML = ""
        showQuestion(question[currentQuestionIndex])
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
} 

const question = [
    {
        question: "An array's length can be evaluated which property?",
        answers: [
            { text: '.length', correct: true },
            { text: '.log', correct: false },
            { text: 'the console', correct: false },
            { text: '.loop', correct: false }

        ]
    },

    {
        question: "Within a loop, what can the 'break' keyword be used for?",
        answers: [
            { text: 'break your competitors code', correct: false },
            { text: 'exit the loop immediately', correct: true },
            { text: 'repeat the loop', correct: false },
            { text: 'indicate a stopping condition', correct: false }

        ]
    },

    {
        question: "Which symbol is a string operator?",
        answers: [
            { text: '+', correct: true },
            { text: '=', correct: false },
            { text: ':', correct: false },
            { text: '?', correct: false }

        ]
    },

    {
        question: "What is a statement?",
        answers: [
            { text: 'Something the bank sends every month', correct: false },
            { text: 'a series of instructions that a computer can follow one-by one', correct: false },
            { text: 'An individual instruction or step that is part of a script', correct: true },
            { text: 'Something a celebrity releases', correct: false }

        ]
    },

    {
        question: "How do you start a single line comment in JavaScript?",
        answers: [
            { text: '//', correct: true },
            { text: '/*', correct: false },
            { text: '<!--', correct: false },
            { text: '*/', correct: false }

        ]
    },

    {
        question: "Which one is not a primitive variable?",
        answers: [
            { text: 'string', correct: false },
            { text: 'number', correct: false },
            { text: 'object', correct: true },
            { text: 'boolean', correct: false }

        ]
    },

    {
        question: "In an if/else statement, where does the strictest statement go?",
        answers: [
            { text: 'at the top', correct: true },
            { text: 'at the end', correct: false },
            { text: 'in the middle', correct: false },
            { text: 'not in an if/else statement', correct: false }

        ]
    },

    {
        question: "What does pop do?",
        answers: [
            { text: 'adds an element to an array', correct: false },
            { text: 'removes the last element from an array', correct: true },
            { text: 'removes the first item from an array', correct: false },
            { text: 'adds an element to the front of an array', correct: false }

        ]
    },

    {
        question: "What is it called when you turn an array into a string?",
        answers: [
            { text: 'rope', correct: false },
            { text: 'liquify', correct: false },
            { text: 'stringer', correct: false },
            { text: 'stringify', correct: true }

        ]
    }
]