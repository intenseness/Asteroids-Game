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
        this.player.thrust();
      } else if (event.keyCode == 65) {
        this.player.turnCCW();
      } else if (event.keyCode == 68) {
        this.player.turnCW();
      } else if (event.keyCode == 32) {
        this.player.shootLasers();
      } else {
        this.player.angularVelocity = 0;
        this.player.acceleration = 0;
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
    this.angularVelocity = 0;
    //this.rotation = 0; // degrees/second
    //this.acceleration = 200; // pixels/second/second
    this.max_speed = 10; // pixels/second
    this.x = 0; //window.innerWidth / 2;
    this.y = 0; //window.innerHeight / 2;
    this.angle = 0;
    //this.length = Math.sqrt(this.x * this.x + this.y * this.y);
    this.velocity = 0;
    this.elem = document.getElementById("Player");
    //this.mass = 20;
    //this.gravity = 10;
  }

  move() {
      //this.x = this.x + this.speed_x;
      //this.y = this.y + this.speed_y;

      this.angle = this.angularVelocity + this.angle;
      this.x += this.velocity * Math.sin(this.angle*Math.PI/180); //degrees to radians for both
      this.y -= this.velocity * Math.cos(this.angle*Math.PI/180);

      this.velocity *= 0.99; // drag
      if(this.velocity < 0.01) {
          this.velocity = 0;
      }

      //this.rotation = Math.sin(this.angle) * this.length;
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
      //console.log(this.angle, this.angularVelocity);
  }

  thrust() {
    //let forces = this.gravity + this.max_speed;
    //this.acceleration = forces / this.mass;
      if(this.velocity < this.max_speed) {
          this.velocity += 1;
      }
    //this.velocity = 10;
    //this.speed_x = this.velocity + this.speed_x;
    //this.speed_y = this.velocity + this.speed_y;



    // What is our current angle...
    // Change speed_x and speed_y based on angle
    // Must limit to max speeds though

      console.log(this.x, this.y, this.velocity, this.angle);
  }

  turnCCW() {
      this.angle -= 4;
       /*if(this.angularVelocity > -.3) {
      this.angularVelocity -= 0.05;
       }*/
  }

  turnCW() {
      this.angle += 4;
      /*if(this.angularVelocity < .3) {
    this.angularVelocity += 0.05;
      }*/
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
    //this.elem.style.top = this.y + "px";
    //this.elem.style.left = this.x + "px";
    this.elem.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotateZ(" + this.angle + "deg)";
    //this.elem.style.transform = 'rotateZ(' + this.angle + 'deg)';
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
