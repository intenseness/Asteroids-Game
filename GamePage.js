var myPizzas = [];

class AttackOfThePizzas {
  constructor() {
    this.player = new Player();
    this.alienPizza = new AlienPizza();
    this.pizza = new Pizza(
      Math.random(0, window.innerWidth),
      Math.random(0, window.innerHeight)
    );
    this.lifeboard = new Lifeboard();
    this.scoreboard = new Scoreboard();
    window.addEventListener("keydown", () => {
      if (event.keyCode == 81) {
        this.pauseGame();
      } else if (event.keyCode == 87) {
        this.player.moveFoward();
      } else if (event.keyCode == 65) {
        this.player.turnLeft();
      } else if (event.keyCode == 68) {
        this.player.turnRight();
      } else if (event.keyCode == 32) {
        this.player.shootLasers();
      } else {
        this.player.angularVelocity = 0;
        this.player.accelerationX = 0;
        this.player.accelerationY = 0;
      }
    });
  }

  pauseGame() {
    console.log("game paused!!!!!");
  }

  updateLifeboard() {}

  updateScoreboard() {}

  update() {
    this.player.move();
    this.player.render();
  }
}

class Player {
  constructor() {
    this.speed_x = 0;
    this.speed_y = 0;
    this.rotation_speed = 180; // degrees/second
    this.acceleration = 200; // pixels/second/second
    this.max_speed = 250; // pixels/second
    this.laserSpeed = 0;
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.angle = -180;
    this.angularVelocity = 0;
    this.elem = document.getElementById("Player");
  }

  move() {
      this.x = this.x + this.speed_x;
      this.y = this.y + this.speed_y;
      // Limit the movement here:
      /*if (this.x > window.width) {
        this.x = 0;
        } else if (this.x < 0) {
        this.x = window.width;
        } else if (this.y > window.height) {
        this.y = 0;
        } else if (this.y < 0) {
        this.y = window.height;
        }*/
  }

  thrust() {
      if(this.speed_x > this.max_speed) {
          this.speed_x = this.max_speed;
      } else if(this.speed_y > this.max_speed) {
          this.speed_y = this.max_speed;
      }
    // What is our current angle...
    // Change speed_x and speed_y based on angle
    // Must limit to max speeds though
  }

  turnCCW() {
    // Change angle
    //this.angularVelocity = -this.rotation_speed;

    //IMPORTANT: https://www.geeksforgeeks.org/2d-transformation-rotation-objects/
  }

  turnCW() {
    // Change angle
    //this.angularVelocity = this.rotation_speed;
  }

  shootLasers() {
    let visuals = document.getElementById("Game");
    let greenLasers = document.createElement("img");
    greenLasers.src ="https://upload.wikimedia.org/wikipedia/commons/e/eb/Green_laser.png";
    greenLasers.height = "10";
    greenLasers.width = "30";
    visuals.appendChild(greenLasers);
    console.log("Pew");
  }

  render() {
    this.elem.style.top = this.y + "px";
    this.elem.style.left = this.x + "px";
    // TODO: render the rotation too
  }

}

class AlienPizza {
  constructor(_id, _xpos, _ypos) {
    this.speed = 0;
    this.direction = 0;
    this.turnAngle = 0;
    this.laserSpeed = 0;
    this.elem = document.getElementById(_id);
    this.x = _xpos;
    this.y = _ypos;
  }

  spawnAlien() {}

  shootRandLasers() {}

  renderShip() {}
}

class Pizza {
  constructor(_xpos, _ypos) {
    this.levelOfSize = 1;
    this.speed = 0;
    this.direction = 0;
    this.x = _xpos;
    this.y = _ypos;
    this.speedX = 50;
  }

  spawnPizza() {}

  breakOff() {}
}

class Lifeboard {
  constuctor() {
    this.lives = 3;
  }

  updateLives() {}
}

class Scoreboard {
  constructor() {
    this.score = 0;
  }

  updateScore() {}
}

let game = new AttackOfThePizzas();
let id = setInterval(frame, 10);

function frame() {
    game.update();
}
