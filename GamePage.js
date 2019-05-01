var gameArea = document.getElementById("Game");
var game;
var id;
var gameOn = false;

class AttackOfThePizzas {
    constructor() {
        this.player = new Player();
        this.pizzas = [];
        this.maxPizzas = 10;
        this.scoreboard = new Scoreboard();
        this.newPizzas();
        this.myScore = 0;
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
        let centerClearDist = 50;
        for (let i = 0; i < this.maxPizzas; i++) {
            let xpos = (Math.random() + 0.01) * 1700;
            let ypos = (Math.random() + 0.01) * 850;
            if (Math.abs(xpos - window.innerWidth / 2) > centerClearDist && Math.abs(ypos - window.innerHeight / 2) > centerClearDist) {
                let pizza = new Pizza(i, xpos, ypos, Math.random() * 4, Math.random() * 4);
                this.pizzas.push(pizza);
            }
        }
    }

    detectCollision() {
        for (let i = 0; i < this.pizzas.length; i++) {
            let pizza = this.pizzas[i];
            let dx = (pizza.x + pizza.width / 2) - (this.player.x + this.player.width / 2);
            let dy = (pizza.y + pizza.height / 2) - (this.player.y + this.player.height / 2);

            let distance = Math.sqrt(dx * dx + dy * dy);
            console.log(dx, dy, distance);

            if (distance < this.player.radius + pizza.radius) {
                //Hit
                this.gameOver();
            }
        }
    }

    gameOver() {
        let div = document.createElement("div");
        let gameOver = document.createElement("h1");
        div.style.display = "inline-block";
        div.style.zIndex = 7;
        gameOver.innerHTML = "Game Over";
        div.appendChild(gameOver)
        gameArea.appendChild(div);
        gameOn = false;
    }

    updateScoreboard() {
        this.scoreboard.board.innerHTML = "SCORE: " + this.myScore;
    }

    update() {
        this.scoreboard.updateScore();
        this.updateScoreboard();
        this.player.move();
        this.player.render();
        for (let i = 0; i < this.pizzas.length; i++) {
            this.pizzas[i].move();
            this.pizzas[i].render();
        }
        this.detectCollision();
    }
}

let playButton = document.getElementById("GameButton");
playButton.addEventListener("click", startGame)

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
        this.radius = 15;
        this.width = 40;
        this.height = 40;
        this.elem.style.zIndex = 2;
        //Broccolli image from: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZFEr6U_pSLLABZnYzn5FhFDt-uiwq1hVxXLlKSY-KZHWyKkX;
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
            this.x = -100;
        } else if (this.x <= -100) {
            this.x = 1800;
        } else if (this.y >= 700) {
            this.y = 200;
        } else if (this.y <= 200) {
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
        this.div.height = "120";
        this.div.width = "120";
        this.elem.height = "120";
        this.elem.width = "120";
        this.height = 120;
        this.width = 120;
        this.radius = 60;
        this.elem.src = "Pizza.png";
        //Pizza image from: "https://courthousepizzanashua.com/wp-content/uploads/2016/10/pizza-hut-cheese-pizza.jpg";
        this.div.style.position = "absolute";
        this.div.style.zIndex = 2;
        this.div.appendChild(this.elem);
        gameArea.appendChild(this.div);
    }

    move() {
        let direction_x = Math.sin(this.angle);
        let direction_y = Math.cos(this.angle);
        this.x += this.speed_x * direction_x;
        this.y -= this.speed_y * direction_y;

        if (this.x >= 1800) {
            this.x = 0;
        } else if (this.x <= 0) {
            this.x = 1800;
        } else if (this.y >= 900) {
            this.y = 0;
        } else if (this.y <= 0) {
            this.y = 900;
        }
    }

    render() {
        this.div.style.top = this.y + "px";
        this.div.style.left = this.x + "px";
    }
}

class Scoreboard {
    constructor() {
        this.board = document.getElementById("Scoreboard");
    }

    updateScore() {
        game.myScore++;
    }
}

function startGame() {
    let alertScreen = document.getElementById("AlertScreen");
    alertScreen.style.visibility = "hidden";
    game = new AttackOfThePizzas();
    id = setInterval(frame, 10);
    gameOn = true;
    let player = document.getElementById("Player");
    player.style.visibility = "visible";
}

function frame() {
    if (gameOn == true) {
        game.scoreboard.updateScore();
        game.update();
    }
}
