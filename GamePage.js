window.addEventListener("keydown", shootLasers);
window.addEventListener("keydown", moveCharacter);

class AttackOfThePizzas {
    constructor() {
        this.player = new Player();
        this.alienPizza = new AlienPizza();
        this.pizza = new Pizza();
        this.lifeboard = new Lifeboard();
        this.scoreboard = new Scoreboard();
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
        this.speed = 0;
        this.direction = 0;
        this.turnAngle = 0;
        this.laserSpeed = 0;
    }

    moveChararacter(event) {
        if(event.key === "w") {
           speed++;
            console.log("w");
       }
        else if(event.key === "a") {
           direction--;
            console.log("a");
       }
        else if(event.key === "s") {
           direction++;
            console.log("s");
       }
    }

    shootLasers(event) {
       if(event.code === "Space") {
           //shoot
           console.log("Pew");
       }
    }
}

class AlienPizza {
    constructor() {
        this.speed = 0;
        this.direction = 0;
        this.turnAngle = 0;
        this.laserSpeed = 0;
    }

    shootRandLasers() {
        let randNum = Math.random()
        if(randNum >= 0.75) {
            console.log("Whirr");
        }
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
