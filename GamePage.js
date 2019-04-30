var myScore = 0;
var gameArea = document.getElementById("Game");

class AttackOfThePizzas {
    constructor() {
        this.player = new Player();
        this.pizzas = [];
        this.maxPizzas = 5;
        this.scoreboard = new Scoreboard();
        this.newPizzas();

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

     newPizzas() {
        for (let i = 0; i < this.maxPizzas; i++) {
            let pizza = new Pizza(i, (Math.random() + 0.01) * 1700, (Math.random() + 0.01) * 850, (Math.random() + 0.1) * 5, (Math.random() + 0.1) * 5);
            this.pizzas.push(pizza);
        }
    }

    detectCollision() {
        //use rectange one
        for (let i = 0; i < this.pizzas.length; i++) {
            let pizza = this.pizzas[i];
            console.log("pizza", pizza.x, pizza.y);
            console.log("player", this.player.x, this.player.y);
            let dx = (pizza.x + pizza.width/2) - (this.player.x + this.player.width/2);
            let dy = (pizza.y + pizza.height/2) - (this.player.y + this.player.height/2);

            let distance = Math.sqrt(dx * dx + dy * dy);
            console.log(dx, dy, distance);

            if (distance < this.player.radius + this.pizzas[i].radius) {
                console.log("Hit");
                this.gameOver();
            }
        }
    }

    gameOver() {
        let gameOver = document.createElement("h1");
        gameOver.innerHTML = "Game Over";
        gameArea.appendChild(gameOver);
        clearInterval(id);
    }

    update() {
        this.scoreboard.updateScore();
        this.player.move();
        this.player.render();
        for (let i = 0; i < this.pizzas.length; i++) {
            this.pizzas[i].move();
            this.pizzas[i].render();
        }
        this.detectCollision();
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
        this.radius = 40;
        this.width = 40;
        this.height = 40;
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
        } else if (this.y >= 700) {
            this.y = -20;
        } else if (this.y <= -20) {
            this.y = 700;
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
        this.elem.style.transform = "rotateZ(" + this.angle + "deg)";
    }
}

class Pizza {
    constructor(_id, _xpos, _ypos, _speed_x, _speed_y) {
        this.speed_x = _speed_x;
        this.speed_y = _speed_y;
        this.x = _xpos;
        this.y = _ypos;
        this.angle = Math.random() * 2 * Math.PI;
        this.div = document.createElement("div");
        this.elem = document.createElement("img");
        this.div.id = "pizzaContainer" + _id;
        this.elem.id = "pizza" + _id;
        this.div.height = "90";
        this.div.width = "120";
        this.elem.height = "90";
        this.elem.width = "120";
        this.height = 90
        this.width = 120
        this.elem.style.border = "1px solid red";
        this.radius = 40;
        this.elem.style.borderRadius = this.radius + "px";
        this.elem.src = "https://courthousepizzanashua.com/wp-content/uploads/2016/10/pizza-hut-cheese-pizza.jpg";
        this.div.style.position = "absolute";
        this.div.appendChild(this.elem);
        gameArea.appendChild(this.div);
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
        } else if (this.y >= 700) {
            this.y = -60;
        } else if (this.y <= -60) {
            this.y = 700;
        }
    }

    render() {
        this.div.style.top = this.y + "px";
        this.div.style.left = this.x + "px";
        //this.elem.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
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

function frame() {
    myScore++;
    game.update();
}
