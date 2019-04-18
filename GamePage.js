window.addEventListener("keyup", shootLasers());

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
        this.speed = ;
        this.direction = ;
        this.turnAngle = ;
        this.laserSpeed = ;
    }

    move(event) {
        if(event.key === "w") {
           speed++;
       }
        else if(event.key === "a") {
           direction--;
       }
        else if(event.key === "s") {
           direction++;
       }
    }

    shootLasers(event) {
       if(event.code === "Space") {
           //shoot
       }
    }
}

class AlienPizza {
    constructor() {
        this.speed = ;
        this.direction = ;
        this.turnAngle = ;
        this.laserSpeed = ;
    }

    shootRandLasers() {
        let randNum = Math.random()
        if(randNum >= 0.75) {
            //shoot
        }
    }
}

class Lifeboard {
    constuctor() {
        this.lives = ;
    }

    updateLives() {

    }
}

class Scorebaord {
    constuctor() {
        this.score = ;
    }

    updateScore() {

    }
}

class Pizza {
    constuctor() {
        this.levelOfSize = ;
        this.speed = ;
        this.direction = ;
    }

    breakOff() {

    }
}
