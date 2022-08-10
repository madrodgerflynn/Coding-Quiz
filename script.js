var startButton = document.getElementById('start-btn')
var questionConatinerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQustions = "";
var currentQuestionIndex = "";

startButton.addEventListener('click', startGame)

function startGame() {

    startButton.classList.add('hide')
    //This is what shuffles the questions
    shuffledQustions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionConatinerElement.classList.remove('hide');
    setNextQuestion()

    
    
    
    function setNextQuestion() {
        //I want to show the questions that are shuffled through the currentQuestionIndex
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }
    
    function showQuestion(question) {
        questionElement.innerText = question.question
        
    }
    
    
    function selectAnswer() {
        
    }
    
    var questions = [
        {
            question: "What is the first letter of the alphabet",
            answers: [
                {text: "A", correct: true},
                {text: '22', correct: false}
            ]
        }
    ]
}