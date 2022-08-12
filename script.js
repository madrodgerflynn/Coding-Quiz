var beginButton = document.getElementById("begin-quiz");
var questionConatinerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var runningQuestionIndex = 0;
var score = 0;
var globalTime = 60;

//setting up the questions as an array with objects inside
var questions = [
  {
    question: "What is the 13th letter of the alphabet",
    choiceA: "F",
    correct: "M",
    choiceB: "A",
    choiceC: "Z",
  },
  {
    question: "Who was the 3rd President of the USA",
    correct: "Thomas Jefferson",
    choiceA: "John Adams",
    choiceB: "James Madison",
    choiceC: "John Quincy Adams",
  },
  {
    question: "Who was the first woman in space?",
    choiceA: "Svetlana Yevgenyevna Savitskaya",
    choiceB: "Serena M. Auñón-Chancello",
    correct: "Valentina Tereshkova",
    choiceC: "Samantha Cristoforetti",
  },
];



function beginQuiz() {
  console.log(answerButtonsElement);
  
  //want to populate the question container
  nextQuestion();
  startTimer();
}

beginButton.addEventListener("click", beginQuiz);

function nextQuestion(e) {

  if (questions[runningQuestionIndex]) {
//Previous working code below
    
    // questionElement.innerHTML =
    //   "<p>" + questions[runningQuestionIndex].question + "</p>";
    // answerButtonsElement.children[0].innerHTML =
    //   questions[runningQuestionIndex][Object.keys(questions[runningQuestionIndex])[1]];
    // answerButtonsElement.children[1].innerHTML =
    //   questions[runningQuestionIndex][Object.keys(questions[runningQuestionIndex])[2]];
    // answerButtonsElement.children[2].innerHTML =
    //   questions[runningQuestionIndex][Object.keys(questions[runningQuestionIndex])[3]];
    // answerButtonsElement.children[3].innerHTML =
    //   questions[runningQuestionIndex][Object.keys(questions[runningQuestionIndex])[4]];
    //  var currentObject = (Object.entries(questions[runningQuestionIndex]));
    //  console.log(currentObject);
     
    //   for (var i = 0; i < 5; i++) {
    //  if (currentObject[i][1] == answerButtonsElement.children[0].innerHTML) {
    //     console.log(currentObject[i]);
    //      console.log(true);
    //     }
    //  }

    const currentObject = Object.entries(questions[runningQuestionIndex]);

    questionElement.textContent = currentObject[0][1];

    for (let i = 1; i < currentObject.length; i++) {
        const button = document.createElement('button');
        // console.log(currentObject[0][1]);
        button.textContent = currentObject[i][1];
        answerButtonsElement.appendChild(button);
        button.addEventListener('click', (e) => {
            console.log(questions[runningQuestionIndex -1].correct);
            //the event trigger
            var response =  e.target.textContent
            if (questions[runningQuestionIndex -1].correct == response){
                score +=1; 
                alert("Score");
                console.log(score);
            }  
            else
            alert("womp womp womp -10 secs");
            globalTime -=10;
                
            
             $("#answer-buttons").empty();
            nextQuestion();
        });
        
    }


    runningQuestionIndex++;
  } else {
    console.log();
    endOfQuiz();
  }
}
function endOfQuiz() {
  alert("The Quiz is over!");
}


function startTimer() {
 
    var display = document.getElementById("time");
  var timerElement = setInterval(function () {
    globalTime--;

    display.textContent = globalTime;

    if (globalTime <= 0) {
      clearInterval(timerElement);
    }
    
  }, 1000);
}

// $(".answer").on("click", nextQuestion);

const test = document.querySelectorAll(".answer");
// console.log(buttonTest);

// const test = $(".answer");
// for (let i = 0; i <test.length; i++) {
//     const currentButton = test[i];
//     console.log(currentButton);
//     currentButton.addEventListener('click', nextQuestion);
// }