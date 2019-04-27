var myPizzas = [];
var myGreenLasers = [];
var maxLasers = 30;
var numLaser = 0;
var maxPizzas = 10;
var numPizzas = 0;
var gameArea = document.getElementById("Game");

class AttackOfThePizzas {
    constructor() {
        this.player = new Player();
        //this.alienPizza = new AlienPizza();
        this.pizza = newPizzas();
        //this.lifeboard = new Lifeboard();
        //this.scoreboard = new Scoreboard();
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

    updateScoreboard() {}

    update() {
        this.player.move();
        this.player.render();
        this.player.collision();
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
        //this.acceleration = 200; // pixels/second/second
        this.max_speed = 10; // pixels/second
        this.x = 0; //window.innerWidth / 2;
        this.y = 0; //window.innerHeight / 2;
        this.angle = 0;
        this.velocity = 0;
        this.elem = document.getElementById("Player");
    }

    move() {
        this.angle = this.angularVelocity + this.angle;
        this.x += this.velocity * Math.sin(this.angle * Math.PI / 180); //degrees to radians for both
        this.y -= this.velocity * Math.cos(this.angle * Math.PI / 180);

        this.velocity *= 0.98; // drag
        if (this.velocity < 0.01) {
            this.velocity = 0;
        }
        if (this.x >= window.innerWidth) {
            this.x = 0;
        } else if (this.x <= 0) {
            this.x = window.innerWidth;
        } else if (this.y >= window.innerHeight) {
            this.y = 0;
        } else if (this.y <= 0) {
            this.y = window.innerHeight;
        }
    }

    thrust() {
        if (this.velocity < this.max_speed) {
            this.velocity += 2.5;
        }
        console.log(this.x, this.y, this.velocity, this.angle);
    }

    turnCCW() {
        this.angle -= 6;
        /*if(this.angularVelocity > -.3) {
          this.angularVelocity -= 0.05;
           }*/
    }

    turnCW() {
        this.angle += 6;
        /*if(this.angularVelocity < .3) {
        this.angularVelocity += 0.05;
          }*/
    }

    collision() {
        if (this.x < game.pizza.x + game.pizza.div.width &&
            this.x + this.elem.width > game.pizza.x &&
            this.y < game.pizza.y + game.pizza.div.height &&
            this.elem.height + this.y > game.pizza.y) {
            // collision detected!
            this.color("green");
        } else {
            // no collision
            this.color("blue");
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
    constructor(_xpos, _ypos, _speed_x, _speed_y, _id, _sizelevel) {
        this.levelOfSize = _sizelevel;
        this.speed_x = _speed_x;
        this.speed_y = _speed_y;
        this.angle = 0;
        this.x = _xpos;
        this.y = _ypos;
        this.elem = document.createElement("img");
        this.div = document.createElement("div");
        this.pizza = document.getElementById(_id);
        this.div.id = this.pizza;
        this.elem.id = "pizza" + numPizza;
        this.elem.height = "100"
        this.elem.width = "132"
        this.elem.src = "https://courthousepizzanashua.com/wp-content/uploads/2016/10/pizza-hut-cheese-pizza.jpg";
        this.div.appendChild(this.elem);
        gameArea.appendChild(this.div);
    }

    move() {
        this.x += this.speed_x;
        this.y -= this.speed_y;
    }

    render() {
        this.elem.style.top = this.y + "px";
        this.elem.style.left = this.x + "px";
        this.elem.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}

/*class Lifeboard {
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
}*/

let game = new AttackOfThePizzas();
let id = setInterval(frame, 10);

function frame() {
    game.update();
}
