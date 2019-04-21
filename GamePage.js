window.addEventListener("keydown", moveCharacter());
window.addEventListener("keydown", pauseGame());
window.addEventListener("keydown", shootLasers());

var myPizzas = [];

class AttackOfThePizzas {
    constructor() {
        this.player = new Player();
        this.alienPizza = new AlienPizza();
        this.pizza = new Pizza();
        this.lifeboard = new Lifeboard();
        this.scoreboard = new Scoreboard();
    }

    pauseGame(event) {

    }

    updateLifeboard() {

    }

    displayLifeboard() {

    }

    updateScoreboard() {

    }

    displayScoreboard() {

    }

    spawnAlien() {

    }

    spawnPizza() {

    }
}

class Player {
    constructor() {
        this.speedX = 0;
        this.speedY = 0;
        this.direction = 0;
        this.turnAngle = 0;
        this.laserSpeed = 0;
        this.x = window/2;
        this.y = window/2;
        this.elem = document.getElementById(_id);
    }

    moveCharacter(event) {
        var keyCode = event.keyCode;
         if(keyCode === 87) {
           //this.speed++;
            console.log("w");
       }
        else if(keyCode === 63) {
           //this.direction--;
            console.log("a");
       }
        else if(keyCode === 68) {
           //this.direction++;
            console.log("s");
       }
    }

    shootLasers(event) {
       if(keyCode === 32) {
           //shoot
           console.log("Pew");
       }
    }

    renderPlayer() {
        this.elem.style.top = this.y + "px";
        this.elem.style.left = this.x + "px";
    }
}

class AlienPizza {
    constructor() {
        this.speed = 0;
        this.direction = 0;
        this.turnAngle = 0;
        this.laserSpeed = 0;
        this.elem = document.getElementById(_id);
    }

    shootRandLasers() {
        let randNum = Math.random()
        if(randNum >= 0.75) {
            console.log("Whirr");
        }
    }

    renderShip() {
        this.elem.style.top = this.y + "px";
        this.elem.style.left = this.x + "px";
    }
}

class Lifeboard {
    constuctor() {
        this.lives = 3;
    }

    updateLives() {

    }
}

class Scoreboard {
    constructor() {
        this.score = 0;
    }

    updateScore() {

    }
}

class Pizza {
    constructor() {
        this.levelOfSize = 1;
        this.speed = 0;
        this.direction = 0;
    }

    breakOff() {

    }
}
