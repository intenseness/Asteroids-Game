var myPizzas = [];

class AttackOfThePizzas {
  constructor() {
    this.player = new Player();
    this.alienPizza = new AlienPizza();
    this.pizza = new Pizza(Math.random(0, window.width), Math.random(0, window.height));
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
}

class Player {
  constructor() {
    this.speedX = 50;
    this.speedY = 50;
    this.rotation_speed = 180; // degrees/second
    this.acceleration = 200;// pixels/second/second
    this.max_speed = 250; // pixels/second
    this.laserSpeed = 0;
    this.x = 500;
    this.y = 500;
    this.elem = document.getElementById("Player");
    this.angle = -180;
    this.angularVelocity = 0;
    this.maxVelocity = this.max_speed;
  }

  moveFoward() {
    this.x = Math.cos(this.rotation) * this.acceleration;
    this.y = Math.sin(this.rotation) * this.acceleration;
    console.log(this.x, this.y);
    this.renderPlayer();
  }

  turnLeft() {
    this.angularVelocity = -this.rotation_speed;
    console.log(this.x);
    this.renderPlayer();
  }

  turnRight() {
    this.angularVelocity = this.rotation_speed;
    console.log(this.x);
    this.renderPlayer();
  }

  shootLasers() {
    let visuals = document.getElementById("Game");
    let greenLasers = document.createElement("img");
    lasers.src = "https://upload.wikimedia.org/wikipedia/commons/e/eb/Green_laser.png";
    lasers.height = "10";
    lasers.width = "30";
    visuals.appendChild(lasers);
    console.log("Pew");
  }

  renderPlayer() {
    if (this.x > window.width) {
        this.x = 0;
    } else if (this.x < 0) {
        this.x = window.width;
    } else if (this.y > window.height) {
        this.y = 0;
    } else if (this.y < 0) {
        this.y = window.height;
    }
    this.elem.style.top = this.y + "px";
    this.elem.style.left = this.x + "px";
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

  spawnAlien() {
    for (let i = 0; i < myPizzas.length; i++) {
      myPizzas[i]
    }
  }

  shootRandLasers() {
    let randNum = Math.random();
    if (randNum >= 0.75) {
        let visuals = document.getElementById("Game");
        let redLasers = document.createElement("img");
        lasers.src = "https://upload.wikimedia.org/wikipedia/commons/c/cc/Red_laser.png";
        lasers.height = "10";
        lasers.width = "30";
        visuals.appendChild(lasers);
        console.log("Whirr");
    }
  }

  renderShip() {
    /*if (this.x > window.width || this.x < 0) {
        boxes[i].xstep = -1.11 * boxes[i].xstep;
      }
      if (boxes[i].ypos > 240 || boxes[i].ypos < 0) {
        boxes[i].ystep = -1.11 * boxes[i].ystep;
      }
      boxes[i].xpos = boxes[i].xpos + boxes[i].xstep;
      boxes[i].ypos = boxes[i].ypos + boxes[i].ystep;
    } else {
      boxes[i].xstep = Math.random();
      boxes[i].ystep = Math.random();
    }
    if (this.player.x > window.width) {
        this.player.x = 0;
    } else if (this.player.x < 0) {
        this.player.x = window.width;
    } else if (this.player.y > window.height) {
        this.player.y = 0;
    } else if (this.player.y < 0) {
        this.player.y = window.height;
    }
    this.elem.style.top = this.y + "px";
    this.elem.style.left = this.x + "px";
  }*/
  }
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

  spawnPizza() {
    let asteroid = new Pizza();
  }

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
