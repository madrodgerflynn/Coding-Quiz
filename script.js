var startButton = document.getElementById('start-btn')
var questionConatinerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQustions = "";
var currentQuestionIndex = "";

startButton.addEventListener('click', startGame)

function startGame() {

    
    //This is what shuffles the questions
    shuffledQustions = questions.Math.random();

    // for (var i = 0; i < 5; i++)
    // {
    //     console.log(i);
    // }
     
    currentQuestionIndex = 0;
    questionConatinerElement.classList.remove('hide');
    setNextQuestion()
    
    var questions = [
        {
            question: "What is the first letter of the alphabet",
            answers: [
                {text: "A", correct: true},
                {text: '22', correct: false},
            ]
            
            
        }
        
            
    

    ]

    
    
    
    function setNextQuestion() {
        //I want to show the questions that are shuffled through the currentQuestionIndex
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }
    
    function showQuestion(question) {
        //This is where I would like to fill in the question boxes
        questionElement.innerText = question.question
        
    }
    
    
    function selectAnswer() {
        
    }
    
}