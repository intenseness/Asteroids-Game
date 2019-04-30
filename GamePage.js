var myScore = 0;
var myLives = 3;
var myPizzas = [];
//var myGreenLasers = [];
//var maxLasers = 30;
//var numLaser = 0;
var maxPizzas = 15;
var numPizza = 1;
var gameArea = document.getElementById("Game");

class AttackOfThePizzas {
    constructor() {
        this.player = new Player();
        //this.alienPizza = new AlienPizza();
        this.pizza = new Pizza((Math.random() + 0.01) * 2000, (Math.random() + 0.01) * 900, (Math.random() + 0.1) * 5, (Math.random() + 0.1) * 5, 1);
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
            }
            /* else if (event.keyCode == 32) {
                this.player.shootLasers();
            } */
        });
    }

    pauseGame() {
        console.log("game paused!!!!!");
    }

    spawnPizza() {

    }

    updateLifeboard() {}

    update() {
        this.scoreboard.updateScore();
        this.player.move();
        this.player.render();
        this.pizza.collision();
        /*for (let i = 0; i < myGreenLasers.length; i++) {
            myGreenLasers[i].move();
            myGreenLasers[i].render();
        }*/
        for (let i = 0; i < myPizzas.length; i++) {
            myPizzas[i].move();
            myPizzas[i].render();
        }
    }
}

class Player {
    constructor() {
        this.speed_x = 0;
        this.speed_y = 0;
        this.angularVelocity = 0;
        this.max_speed = 7.5; // pixels/second
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
        this.angle = 0;
        this.velocity = 0;
        this.elem = document.getElementById("Player");
        this.radius = 50;
        this.elem.style.borderRadius = this.radius + "px";
    }

    move() {
        this.angle += this.angularVelocity;
        this.x += this.velocity * Math.sin(this.angle * Math.PI / 180); //degrees to radians for both
        this.y -= this.velocity * Math.cos(this.angle * Math.PI / 180);

        this.velocity *= 0.98; // drag
        if (this.velocity < 0.01) {
            this.velocity = 0;
        }

        this.angularVelocity *= 0.975; //drag
        if (Math.abs(this.angularVelocity) < 0.01) {
            this.angularVelocity = 0;
        }

        if (this.x >= 2450) {
            this.x = 0;
        } else if (this.x <= -1) {
            this.x = 2450;
        } else if (this.y >= 1000) {
            this.y = 0;
        } else if (this.y <= -1) {
            this.y = 1000;
        }
    }

    thrust() {
        if (this.velocity < this.max_speed) {
            this.velocity += 2.5;
        }
    }

    turnCCW() {
        if (this.angularVelocity > -1.75) {
            this.angularVelocity -= 0.75;
        }
    }

    turnCW() {
        if (this.angularVelocity < 1.75) {
            this.angularVelocity += 0.75;
        }
    }

    /*shootLasers() {
        numLaser++;
        let greenLaser = new GreenLaser(this.x, this.y, Math.sin(this.angle * Math.PI / 180), Math.cos(this.angle * Math.PI / 180), this.angle, numLaser);
        myGreenLasers.push(greenLaser);
    }*/

    render() {
        this.elem.style.top = this.y + "px";
        this.elem.style.left = this.x + "px";
        this.elem.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotateZ(" + this.angle + "deg)";
    }
}

/*class GreenLaser {
    constructor(_x, _y, _speed_x, _speed_y, _angle, _id) {
        this.x = _x;
        this.y = _y;
        this.speed_x = _speed_x;
        this.speed_y = _speed_y;
        this.angle = _angle + 90;
        this.glaser = document.getElementById(_id);
        this.elem = document.createElement("img");
        this.elem.id = "gLaser" + numLaser;
        this.elem.height = "10";
        this.elem.width = "30";
        this.elem.style.position = "absolute";
        this.elem.src = "https://upload.wikimedia.org/wikipedia/commons/e/eb/Green_laser.png";
        this.angle = game.player.angle;
        gameArea.appendChild(this.elem);
    }

    move() {
        this.x += this.speed_x;
        this.y -= this.speed_y;
        console.log(this.x, this.y, this.speed_x, this.speed_y);
    }

    render() {
        let bChar = document.getElementById("Player");
        this.elem.style.top = this.y + "px";
        this.elem.style.left = this.x + "px";
        this.elem.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotateZ(" + this.angle + "deg)";
    }

}

class AlienPizza {
    constructor(_xpos, _ypos, _id) {
        this.speed = 0;
        this.direction = 0;
        this.turnAngle = 0;
        this.laserSpeed = 0;
        this.elem = document.getElementById(_id);
        this.x = _xpos;
        this.y = _ypos;
    }

  shootRandLasers() {}

  move() {}

  render() {}

}*/

class Pizza {
    constructor(_xpos, _ypos, _speed_x, _speed_y, _sizelevel) {
        this.levelOfSize = _sizelevel;
        this.speed_x = _speed_x;
        this.speed_y = _speed_y;
        this.x = _xpos;
        this.y = _ypos;
        this.angle = Math.random() * 2 * Math.PI;
        this.div = document.createElement("div");
        this.elem = document.createElement("img");
        this.div.id = "pizzaContainer" + numPizza;
        this.elem.id = "pizza" + numPizza;
        this.div.height = "90";
        this.div.width = "120";
        this.elem.height = "90";
        this.elem.width = "120";
        this.radius = 120;
        this.elem.style.borderRadius = this.radius + "px";
        this.elem.src = "https://courthousepizzanashua.com/wp-content/uploads/2016/10/pizza-hut-cheese-pizza.jpg";
        this.div.style.position = "absolute";
        this.div.appendChild(this.elem);
        gameArea.appendChild(this.div);
    }

    collision() {
        let dx = game.player.x - this.x;
        let dy = game.player.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < game.player.radius + this.radius) {
            console.log("Hit");
        }
    }

    newPizzas() {
        for (let i = 0; i < maxPizzas; i++) {
            let pizza = new Pizza((Math.random() + 0.01) * 2000, (Math.random() + 0.01) * 900, (Math.random() + 0.1) * 5, (Math.random() + 0.1) * 5, numPizza);
            numPizza++;
            myPizzas.push(pizza);
        }
    }

    move() {
        let direction_x = Math.sin(this.angle);
        let direction_y = Math.cos(this.angle);
        this.x += this.speed_x * direction_x;
        this.y -= this.speed_y * direction_y;

        if (this.x >= 2450) {
            this.x = 0;
        } else if (this.x <= -1) {
            this.x = 2450;
        } else if (this.y >= 1000) {
            this.y = 0;
        } else if (this.y <= -1) {
            this.y = 1000;
        }
    }

    render() {
        this.elem.style.top = this.y + "px";
        this.elem.style.left = this.x + "px";
        this.elem.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}

class Lifeboard {
    constuctor() {
        this.lives = 3;
    }

    loseLife() {}

    updateLives() {}
}

class Scoreboard {
    constructor() {
        this.scoreboard = document.getElementById("Scoreboard");
    }

    updateScore() {
        this.scoreboard.innerHTML = "SCORE: " + myScore;
    }
}

let game = new AttackOfThePizzas();
let id = setInterval(frame, 10);

game.pizza.newPizzas();

function frame() {
    myScore++;
    game.update();
}
