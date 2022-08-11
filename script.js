var beginButton = document.getElementById("begin-quiz");
var questionConatinerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var runningQuestionIndex = 0;

var questions = [
  {
    question: "What is the 13th letter of the alphabet",
    choiceA: "F",
    choiceB: "A",
    choiceC: "Z",
    correct: "M",
  },
  {
    question: "Who was the 3rd President of the USA",
    choiceA: "John Adams",
    choiceB: "James Madison",
    choiceC: "John Quincy Adams",
    correct: "Thomas Jefferson",
  },
  {
    question: "Who was the first woman in space?",
    choiceA: "Svetlana Yevgenyevna Savitskaya",
    choiceB: "Serena M. Auñón-Chancello",
    choiceC: "Samantha Cristoforetti",
    correct: "Valentina Tereshkova",
  },
];

beginButton.addEventListener("click", beginQuiz);

function beginQuiz() {
  console.log(answerButtonsElement);
  //want to populate the question container
  nextQuestion();
}
function nextQuestion() {
  if (questions[runningQuestionIndex]) {
    questionElement.innerHTML =
      "<p>" + questions[runningQuestionIndex].question + "</p>";
    answerButtonsElement.children[0].innerHTML =
      questions[runningQuestionIndex].choiceA;
    answerButtonsElement.children[1].innerHTML =
      questions[runningQuestionIndex].choiceB;
    answerButtonsElement.children[2].innerHTML =
      questions[runningQuestionIndex].choiceC;
    answerButtonsElement.children[3].innerHTML =
      questions[runningQuestionIndex].correct;

    runningQuestionIndex++;
  }
  else {

    console.log("endOfQuiz")
  }
}
function endOfQuiz () {

    //presents score
    //stop timer
    //type initials
}


$(".answer").on("click", nextQuestion);
