var myPizzas = [];

class AttackOfThePizzas {
  constructor() {
    this.player = new Player();
    this.alienPizza = new AlienPizza();
    this.pizza = new Pizza(Math.random(0, window), Math.random(0, window));
    this.lifeboard = new Lifeboard();
    this.scoreboard = new Scoreboard();
    window.addEventListener("keydown", () => {
      if (event.keyCode == 81) {
        this.pauseGame();
      } else if (event.keyCode == 87) {
        this.player.moveFoward();
      } else if (event.keyCode == 63) {
        this.player.turnLeft();
      } else if (event.keyCode == 68) {
        this.player.turnRight();
      } else if (event.keyCode == 32) {
        this.player.shootLasers();
      }
    });
  }

  pauseGame() {
    console.log("game paused!!!!!");
  }

  updateLifeboard() {}

  updateScoreboard() {}

  spawnAlien() {}

  spawnPizza() {
    let asteroid = this.pizza;
  }
}

class Player {
  constructor() {
    this.speedX = 0;
    this.speedY = 0;
    this.direction = 0;
    this.turnAngle = 0;
    this.laserSpeed = 0;
    this.x = window / 2;
    this.y = window / 2;
    this.elem = document.getElementById("Player");
  }

  moveFoward() {
    this.y--;
    this.renderPlayer()
  }

  turnLeft() {
    this.x--;
    this.renderPlayer()
  }

  turnRight() {
    this.x++;
    this.renderPlayer()
  }

  shootLasers() {
      //shoot
      console.log("Pew");
    }

  renderPlayer() {
    this.elem.style.top = this.y + "px";
    this.elem.style.left = this.x + "px";
  }
}

class AlienPizza {
  constructor(_id) {
    this.speed = 0;
    this.direction = 0;
    this.turnAngle = 0;
    this.laserSpeed = 0;
    this.elem = document.getElementById(_id);
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
