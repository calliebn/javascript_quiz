const startButton = document.getElementById('start')
const questionsElement = document.getElementById('questions')

startButton.addEventListener('click', startGame)

function startGame() {
startButton.classList.add('hide')
questionsElement.classList.remove('hide')
setNextQuestion()

}

function selectAnswer() {


}

const questions = [
    {
        question: "What is question 1?",
        answers: [
            { text: 'Correct Answer', correct: true },
            { text: 'Wrong Answer 1', correct: false },
            { text: 'Wrong Answer 2', correct: false },
            { text: 'Wrong Answer 3', correct: false }

        ]
    }
]