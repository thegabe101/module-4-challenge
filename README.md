# module-4-challenge

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Credits](#credits)
- [Usage](#usage)
- [Bugs](#bugs)
- [Screenshots](#screenshots)

## Description

This project involved creating a trivia game in which the player guessed questions relating to NBA history under a timed setting and getting a final score.

- The motivation for creating this project was developing vanilla JavaScript skills in order to be able to add significant interactivity to a static HTML page.
- I built this project in order to continue developing JavaScript skills. Creating an HTML page and designing it with CSS is one matter, but adding the ability for the user to interact is an entirely different matter. This project required several different levels of interactivity, including cycling through buttons and questions, recording a score, altering a running timer, and saving a score to local storage within the browser.
- This is a useful project in that it creates a page that a user can play a game with. This lends itself to numerous possibilities across the web, including interactive games, recording user choices as variables, and storing said variables so that if the user returns they are building off of what they recorded previously.
- This project was immensely frustrating for me, and likely the most difficult thing I have ever been asked to do academically. The greatest challenge was creating event listeners that properly cycled through a question index upon click so that the user could proceed through the trivia game. I also learned a lot about how to affect different live elements on a page, such as a score and timer. Furthermore, this was an introduction to local storage, which enables a browser to store values within it's cache and so that it can remember those values for a returning user.

## Installation

- There is no specialized installation required to use this webpage. All functionality is built into the page itself through JavaScript, which changes the displayed HTML elements. The user can play the trivia game without downloading any applications or extensions.

## Credits

- I could not have completed this project without the help and encouragement my professor Joe Ruefess, TA's, W3Schools, MDM, and my tutor Jacob Carver.

## Usage

-Using this website is straightforward. Once the page loads, the user clicks the "Check Ball!" button, and the timer and first question of the quiz appears. The user may click on the next or previous question buttons in order to cycle through questions, and their answers will be recorded. An incorrect answer will subtract 5 seconds from the timer. Upon completion of the quiz, the user will receive their score.

## Bugs

-There are numerous known bugs in this trivia game.

-Issue displaying score list (post-game) in an orderly manner. Seems to be an issue with styling a previously hidden element.
-Next and previous buttons are buggy and should not be used. Was unsure how to properly program a user input on a skipped-to-behind question in accordance with score and time remaining. Furthermore, could not make logic properly go +1 or -1 on questions using the next and previous buttons. Currently, the buttons skip questions by 2s.
-The restart button is programmed to page reload. This is not a "true" function and more of a shortcut.
-Issues with page alignment in CSS once game is begun.

## Screenshots

- ![Alt= Screenshot showing initial prompt](screenshot1.jpg)
- ![Alt= Screenshot showing gameboard](screenshot2.jpg)
- ![Alt= Screenshot showing a score page](screenshot3.jpg)
