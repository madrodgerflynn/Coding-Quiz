var startButton = document.getElementById("start-btn");
var questionConatinerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

var questions = [
    "What is the 13th letter of the alphabet",
    "Who was the 3rd President of the USA",
    "Who was the first woman in space?",
];

var correctAnswers = [
    "M", "Thomas Jefferson", "Valentina Tereshkova"
];

var incorrectAnswers = [
    "Z",
    "A",
    "F",
    "John Adams",
    "James Madison",
    "John Quincy Adams",
    "Svetlana Yevgenyevna Savitskaya",
    "Serena M. Auñón-Chancello",
    "Samantha Cristoforetti",

];


function StartBtn() {
    
    generateBtn.addEventListener('click', start);



}