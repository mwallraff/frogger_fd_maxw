// Enemies our player must avoid
function Enemy(speed) {
  // every instance should have its own speed setting
  this.speed = speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  //positions to control the ennemy's movement
  this.x;
  this.y;
  // when the ennemy instance is created set it to the starting position
  this.toStart();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + (this.speed * 50 * dt);
  // if the ennemy reaches the right end of the canvas area reset it to its starting position
  if (this.x > 505) {
    this.toStart();
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.toStart = function() {
  // randomly select one of three rows and set back ennemy to the left of drawing area by a random number of pixels in order to vary the entry times of ennemies
  this.y = 83 * Math.floor((Math.random() * 3) + 1) - 20;
  this.x = -1 * Math.floor((Math.random() * 300) + 1);
}

// Player Class

function Player() {
  // player avatar
  this.sprite = 'images/char-boy.png';
  //positions to control the player's movements
  this.x;
  this.y;
  // when the player instance is created set it to the starting position
  this.toStart();
}
// Draw the player on the screen, required method for game
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
//place player at the bottom of the game (in a random column)
Player.prototype.toStart = function() {
  this.y = 387;
  this.x = 101 * Math.floor((Math.random() * 5));
}
  // depending on the arrow key pressed move the player in different directions - check for canvas boundaries
Player.prototype.handleInput = function(key) {

  switch (key) {
    case 'left':
      if (this.x > 0) {
        this.x = this.x - 101;
      }
      break;

    case 'up':
      if (this.y > 83) {
        this.y = this.y - 83;

      } else {
  // player has reached the top, check if he has already scored enough times for the entire game to be won
        if (allStars.length == 13) {
          return;
        } else {
  // add a star every time the plaer reaches the water, place the player back to the beginning
          addStar();
          this.toStart();
        }
      }
      break;

    case 'right':
      if (this.x < 404) {
        this.x = this.x + 101;
      }
      break;

    case 'down':
      if (this.y < 360) {
        this.y = this.y + 83;
      }
      break;
  }
}

/// Star class that marks every successful games
function Star() {
  this.sprite = 'images/star.png';
  this.y = 60;
//sets the x position of every new star depending on how many stars have already been drawn
  this.x = 505 - 45 - (allStars.length * 37);
}

// Draw the Star on the screen
Star.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/// Heart class that marks the number of lifes left
function Heart(x) {
  this.sprite = 'images/heart.png';
  this.y = 95;
  this.x = 13 + x;
}
// Draws the Hear on the screen
Heart.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// Place the player object in a variable called player
// Place all enemy objects in an array called allEnemies
// Create three hearts and put them inside an array called allHearts



var player = new Player();

var allEnemies = [];
let i = 0;
for (i = 0; i < 4; i++) {
  allEnemies[i] = new Enemy(Math.floor((Math.random() * 3) + 1));
}

var allHearts = [];
for (i = 0; i < 3; i++) {
  allHearts[i] = new Heart(i * 30);
}
// creates an array allStars to hold star instances
// function addStar instantiates a new star. it is called every time the player reaches the water
var allStars = [];
function addStar() {
  var star = new Star();
  allStars.push(star);
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});
