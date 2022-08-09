const startButton = document.getElementById('start-btn')
const questionConatinerElement = document.getElementById('question-container')


startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questionConatinerElement.classList.remove('hide')
    setNextQuestion()

}



function setNextQuestion() {

}

function selectAnswer() {

}

