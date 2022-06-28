//initial questions --
//create a randomizer so that the quiz is different every time? probably not 
//starting point? 
//create an html file for each answer? 
//could use css to hide question answers
//could create one div with h1 and four buttons with display none (only first display as soon as quiz is started)
//as soon as one is answered you change all the 
//going to start by adding a timer and some obvious global variables 

const goButton = document.getElementById('go');

var timeRemain = document.getElementById('timeRemaining');

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

goButton.addEventListener('click', beginTrivia)
goButton.addEventListener('click', countdown)
    

function beginTrivia() {
    console.log("button has been clicked")
    goButton.classList.add('hide')
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