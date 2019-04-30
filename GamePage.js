var myScore = 0;
var myLives = 3;
var myPizzas = [];
var maxPizzas = 15;
var numPizza = 1;
var gameArea = document.getElementById("Game");

class AttackOfThePizzas {
    constructor() {
        this.player = new Player();
        this.pizza = new Pizza((Math.random() + 0.01) * 1700, (Math.random() + 0.01) * 900, (Math.random() + 0.1) * 5, (Math.random() + 0.1) * 5, 1);
        this.scoreboard = new Scoreboard();
        window.addEventListener("keydown", () => {
            if (event.keyCode == 87) {
                this.player.thrust();
            } else if (event.keyCode == 65) {
                this.player.turnCCW();
            } else if (event.keyCode == 68) {
                this.player.turnCW();
            }
        });
    }

    update() {
        this.scoreboard.updateScore();
        this.player.move();
        this.player.render();
        this.pizza.collision();
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
        this.max_speed = 7.5;
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

        if (this.x >= 1800) {
            this.x = 0;
        } else if (this.x <= 0) {
            this.x = 1800;
        } else if (this.y >= 900) {
            this.y = -20;
        } else if (this.y <= -20) {
            this.y = 900;
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

    render() {
        this.elem.style.top = this.y + "px";
        this.elem.style.left = this.x + "px";
        this.elem.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotateZ(" + this.angle + "deg)";
    }
}

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
            let pizza = new Pizza((Math.random() + 0.01) * 1700, (Math.random() + 0.01) * 850, (Math.random() + 0.1) * 5, (Math.random() + 0.1) * 5, numPizza);
            numPizza++;
            myPizzas.push(pizza);
        }
    }

    move() {
        let direction_x = Math.sin(this.angle);
        let direction_y = Math.cos(this.angle);
        this.x += this.speed_x * direction_x;
        this.y -= this.speed_y * direction_y;

        if (this.x >= 1700) {
            this.x = 0;
        } else if (this.x <= 0) {
            this.x = 1700;
        } else if (this.y >= 900) {
            this.y = -60;
        } else if (this.y <= -60) {
            this.y = 900;
        }
    }

    render() {
        this.elem.style.top = this.y + "px";
        this.elem.style.left = this.x + "px";
        this.elem.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
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
