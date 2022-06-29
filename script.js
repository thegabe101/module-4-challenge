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
//TODO: create question arrays/objects
// var questionBank = ["What famous NBA player went by the name, The Admiral?",
// "What is the highest number of points ever scored by a single player in an NBA game?",
// "What country is Dallas Mavericks star Luka Doncic from?",
// "What is the circumference of an official NBA basketball?", 
// "What is the longest winning streak in NBA history?",
// "Who is the only player in NBA history to have three sons play in the league?",
// "Which year was Michael Jordan's first signature shoe released?",
// "Who was the MVP of the 2008 NBA Finals?",
// "Who was the first high school player to go straight from high school to the NBA and be drafted first overall?",
// "What university did former NBA star Allen Iverson attend?"]
//TODO:this array is too complicated. need to combine arrays into question + answers + correct answer index. 
// initially tried creating question array as object bank, but not sure how to stringify in the randomizer so changed back into array.
// var questionBankAbsolute {
// questionBank.indexOf(0)
// // }
//   {
  var questionBank1 = ["What famous NBA player went by the name, The Admiral?", "Cuttino Mobley", "David Robinson", "Kevin Garnett", "Dirk Nowitzki"]
  var questionBank2 = ["What is the highest number of points ever scored by a single player in an NBA game?", "110", "94", "81", "100"]
  var questionBank3 = ["What country is Dallas Mavericks star Luka Doncic from?", "Lithuania", "Croatia", "Slovenia", "Poland"]
  var questionBank4 = ["What is the circumference of an official NBA basketball?", "29.5 inches", "25.5 inches", "30 inches", "28.5 inches"]
  var questionBank5 = ["What is the longest winning streak in NBA history?", "28 games, Golden State Warriors, '15-'16", "Houston Rockets, '07-'08", "27 games, Miami Heat, '12-'13", "33 games, Los Angeles Lakers, '71-72"]
  var questionBank6 = ["Who is the only player in NBA history to have three sons play in the league?", "LeBron James", "Rick Barry", "LaMar Ball", "Gary Payton"]
  var questionBank7 = ["Which year was Michael Jordan's first signature shoe released?", "1991", "1989", "1984", "1987"]
  var questionBank8 = ["Who was the MVP of the 2008 NBA Finals?", "Paul Pierce", "Kevin Garnett", "Kobe Bryant", "Ray Allen"]
  var questionBank9 = ["Who was the first high school player to go straight from high school to the NBA and be drafted first overall?", "LeBron James", "Anthony Davis", "Chris Webber", "Kwame Brown"]
  var questionBank10 = ["What university did former NBA star Allen Iverson attend?", "Duke", "USC", "Georgetown", "UCONN"]
  var questionList = [questionBank1, questionBank2, questionBank3, questionBank4, questionBank5, questionBank6, questionBank7, questionBank8, questionBank9, questionBank10]
  var questionCorrect = [questionBank1[2], questionBank2[4], questionBank3[4], questionBank4[2], questionBank5[4], questionBank6[2], questionBank7[3], questionBank8[2], questionBank9[4], questionBank10[3]]
  
//     question: "What famous NBA player went by the name, The Admiral?",
//     answers: [
//       {text: "David Robinson", correct: true},
//       {text: "Tim Duncan", correct: false}
//     ]
//   }
// 
var randomQuestion="";
// var answerBank = ["David Robinson", "Cuttino Mobley", "Kevin Garnett", "Dirk Nowitzki", 
// "100", "81", "110", "94", 
// "Slovenia", "Lithuania", "Croatia", "Poland", 
// "29.5 inches", "25.5 inches", "30 inches", "28.5 inches", 
// "33 games, Los Angeles Lakers, '71-72", "27 games, Miami Heat, '12-'13", "22 games, Houston Rockets, '07-'08", "28 games, Golden State Warriors, '15-'16", 
// "Rick Barry", "LaMar Ball", "LeBron James", "Gary Payton", 
// "1984", "1987", "1991", "1989", 
// "Paul Pierce", "Kobe Bryant", "Kevin Garnett", "Ray Allen", 
// "Kwame Brown", "LeBron James", "Chris Webber", "Anthony Davis", 
// "Georgetown", "Duke", "USC", "UCONN"]
console.log(questionBank1.indexOf("David Robinson"));
console.log(questionBank2.indexOf("Kobe Bryant"));
var questionBox = document.getElementById ('questionTitle')
var startBtn = document.getElementById("go");
var resetBtn = document.querySelector("reset");
var timeRemain = document.getElementById('timeRemaining');
var answerA = document.getElementById ('option1');
var answerB = document.getElementById ('option2');
var answerC = document.getElementById ('option3');
var answerD = document.getElementById ('option4');
//this var would be to ensure that the user can't click start once the game has started, but isn't necessary because I hide the button upon start. 
var gameStarted = false;
//const goButton = document.getElementById('go');
//confused about my start button. seems to need 2 separate variables but not sure why. 
startBtn.addEventListener('click', hideButton)
startBtn.addEventListener('click', countdown)
//attempted to create function to reset timer to 0 on reset button but will have to get back to this later. 
// resetBtn.addEventListener('click', function (){
//   currentScore=0;
//   clearInterval(timeInterval);
//   currentScore.textContent=0;
// })
//need to create span for current score somewhere in HTML


//this function might be redundant because my button dissapears anyways, but I wanted to practice it. 
startBtn.addEventListener("click", function (){
  if(gameStarted){
    return;
  }
  //initially i tried a loop here, but tutor helped me to understand indexing. there was no need for the loop because the individual lines writing text.content write populate their corresponding elements. 
  var randomQuestionIndex = [Math.floor(Math.random()*questionList.length)]
  console.log(questionList.length);
  console.log(randomQuestion);
    questionBox.textContent = questionList[randomQuestionIndex][0];
    answerA.textContent = questionList[randomQuestionIndex][1];
    answerB.textContent = questionList[randomQuestionIndex][2];
    answerC.textContent = questionList[randomQuestionIndex][3];
    answerD.textContent = questionList[randomQuestionIndex][4];

  //nice! randomizer is working and selecting a random question from the question bank. 
  //TODO: display an initial random question upon game commencement. 
  //questionBox.textContent = randomQuestion;
  
}
)

// answerA.addEventListener("click", playerAnswer);
// answerB.addEventListener("click", playerAnswer);
// answerC.addEventListener("click", playerAnswer);
// answerD.addEventListener("click", playerAnswer);

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