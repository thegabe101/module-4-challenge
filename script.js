//TODO: create query selectors for elements that will be grabbed. 
//these include: next button, reset button, time left span, word display, and start button. 
//TODO: wrap most of game in a function that executes upon click start. 
//TODO: Make question 1 pop up upon click start, options pop up upon click start.
//TODO: Make options and question cycle upon click next.

//initial questions --
//create a randomizer so that the quiz is different every time? probably not 
//starting point? 
//create an html file for each answer? 
//could use css to hide question answers
//could create one div with h1 and four buttons with display none (only first display as soon as quiz is started)
//as soon as one is answered you change all the 
//going to start by adding a timer and some obvious global variables 
var startBtn = document.getElementById("go");
var resetBtn = document.querySelector("reset");
var timeRemain = document.getElementById('timeRemaining');
//this var would be to ensure that the user can't click start once the game has started, but isn't necessary because I hide the button upon start. 
var gameStarted = false;
const questions = [
  {
    question: "What famous NBA player went by the name, The Admiral?",
    answers: [
      {text: "David Robinson", correct: true},
      {text: "Tim Duncan", correct: false}
    ]
  }
]
//const goButton = document.getElementById('go');
//confused about my start button. seems to need 2 separate variables but not sure why. 
startBtn.addEventListener('click', hideButton)
startBtn.addEventListener('click', countdown)
resetBtn.addEventListener('click', function (){
  currentScore=0;
  clearInterval(timeInterval);
  currentScore.textContent=0;
})
//need to create span for current score somewhere in HTML


//this function might be redundant because my button dissapears anyways, but I wanted to practice it. 
startBtn.addEventListener("click", function (){
  if(gameStarted){
    return;
  }
}
)


function countdown() {
  var timeLeft = 150;

  var timeInterval = setInterval(function () {

    if (timeLeft > 1) {

      timeRemain.textContent = timeLeft + ' seconds remaining';

      timeLeft--;
    } else if (timeLeft === 1) {

      timeRemain.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {

      timeRemain.textContent = '';

      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}



/* -- initial attempt at timer unsuccessful, leaving in so I can see what went wrong 

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeRemain.textContent = secondsLeft + "" + "seconds left!";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

setTime();
//big question with the timer is: how to subtract 10 seconds when a question is wrong? 
*/

//this function hides the start button upon click. was having trouble wrapping it into main function, so I capitulated to putting it down here. 
function hideButton() {
    console.log("button has been clicked")
    startBtn.classList.add('hide')
    console.log("neat trick. taking display:none from css can hide a button once function has been executed")
}

/*

function next {

}

function selectAnswer {

}


var questionsArr = [
    {
        title: "this is question1",
        Option1: "1A",
        Option2: "1B",
        Option3: "1C",
        Option4: "1D",
        correctAnswer: "1A",
    },
    {
        title: "this is question2",
        Option1: "2A",
        Option2: "2B",
        Option3: "2C",
        Option4: "2D",
    },
    {
        title: "this is question3",
        Option1: "3A",
        Option2: "3B",
        Option3: "3C",
        Option4: "3D",
    },
]
console.log(questionsArr[0].title)
var documentTitle = document.querySelector('#title')
var documentAnsBtn1 = document.querySelector('#option1')
var documentAnsBtn2 = document.querySelector('#option2')
var documentAnsBtn3 = document.querySelector('#option3')
var documentAnsBtn4 = document.querySelector('#option4')
documentTitle.textContent = questionsArr[0].title
documentAnsBtn1 = questionsArr[0].Option1
documentAnsBtn2 = questionsArr[0].Option2
documentAnsBtn3 = questionsArr[0].Option3
documentAnsBtn4 = questionsArr[0].Option4
// if(clicked){
//     documentTitle.textContent = questionsArr[1].title
// documentAnsBtn1 = questionsArr[1].Option1
// documentAnsBtn2 = questionsArr[1].Option2
// documentAnsBtn3 = questionsArr[1].Option3
// documentAnsBtn4 = questionsArr[1].Option4
// }
*/