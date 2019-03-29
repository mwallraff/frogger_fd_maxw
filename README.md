# Classic Arcade Game Clone Project - Project for Udacity Frontend Nano Degree

This small browser game is an online version of the classic arcade game frogger.
Developing this game has been an educational project in the Udacity frontend developer nano degree.

## Prerequisites
This game is meant to run in a web browser. It makes use of standard ES5 functionality. Some special functions such as "requestAnimationFrame" is not supported by Internet Explorer versions 9 and below as well as very old versions of modern browsers (Chrome, Edge, Firefox, Safari).

## Rules of the Game
The player's boy character must cross a stretch of ugly pavement to reach beach and water. The pavement is a bugs' trail and the boy must avoid them. If hit by a bug the boy is set back to his starting point and loses one life. The game ends with a 'game over' if all three lives are lost. If however the boy manages to reach the water 13 times without losing all of his lives the game is won.

## Coding, reusability, maintainability
The code is split into three files: app.js, engine.js and resources.js:
**app.js** provides the classes, objects, properties and methods (including rendering) for the player's character, the enemies and some performance indicators.
**engine.js** provides the canvas rendering loop, checks for collisions and takes care of starting and ending the game
**resources.js** holds image loading functionality including preloading and basic caching

## Code Style
Meant to be compliant with:
http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html

## Built With
ES5 object oriented javascript
Graphics provided by udacity

## Contributing
This is a one-off only self-learn project for the Udacity Frontend nano-degree. Contributions will not be supported.

## Versioning
This is the version submitted in a first attempt to meet the project's requirements. There might be some minor revisions.
However the game will not be revised, actively improved, supported or maintained in the future.

## Authors
Max W
Project base and graphics by Udacity Team Andrew, hbkwong https://github.com/udacity/frontend-nanodegree-arcade-game

## Acknowledgments
clickable button on canvas by https://stackoverflow.com/questions/24384368/simple-button-in-html5-canvas by A1rPun
