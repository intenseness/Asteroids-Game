var myPizzas = [];

class AttackOfThePizzas {
  constructor() {
    this.player = new Player();
    this.alienPizza = new AlienPizza();
    this.pizza = new Pizza(Math.random(0, window), Math.random(0, window));
    this.lifeboard = new Lifeboard();
    this.scoreboard = new Scoreboard();
    //this.id = setInterval(this.frame, 5);
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
      }
    });
  }

  /*frame() {
    for (let i = 0; i < myPizzas.length; i++) {
    if (myPizzas[i].speedX < 9 && boxes[i].ystep < 9) {
      if (boxes[i].xpos > 1740 || boxes[i].xpos < 0) {
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
    if (boxes[i].ypos < 295 && boxes[i].xpos < 1795) {
      boxes[i].render();
    }
  }
  }*/

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
    this.direction = 0;
    this.turnAngle = 0;
    this.laserSpeed = 0;
    this.x = 500;
    this.y = 500;
    this.elem = document.getElementById("Player");
  }

  moveFoward() {
    this.y = this.y - this.speedY;
    console.log(this.y);
    this.renderPlayer();
  }

  turnLeft() {
    this.x = this.x - this.speedX;
    console.log(this.x);
    this.renderPlayer();
  }

  turnRight() {
    this.x = this.x + this.speedX;
    console.log(this.x);
    this.renderPlayer();
  }

  shootLasers() {
    let visuals = document.getElementById("Game");
    let lasers = document.createElement("img");
    lasers.src = "https://upload.wikimedia.org/wikipedia/commons/e/eb/Green_laser.png";
    lasers.height = "10";
    lasers.width = "40";
    visuals.appendChild(lasers);
    console.log("Pew");
  }

  renderPlayer() {
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
      console.log("Whirr");
    }
  }

  renderShip() {
    this.elem.style.top = this.y + "px";
    this.elem.style.left = this.x + "px";
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
