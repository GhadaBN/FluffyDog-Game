class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      220,
      80,
      68,
      "../images/player-icon.png"
    );
    this.height = 540;
    this.width = 960;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gamesIsOver = false;
    this.gameIntervalId;
    this.obstacleIntervalId;
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    // Start the game loop
    this.gameIntervalId = setInterval(() => this.gameLoop(), 20);
    this.obstacleIntervalId = setInterval(() => this.generateObstacle(), 3000);
  }

  gameLoop() {
    this.update();
    this.checkCollisions();
    // this.cleanUpObstacles();

    if (this.gameIsOver) {
      this.endGame();
    }
  }

  update() {
    this.player.move();
    this.obstacles.forEach((obstacle) => {
      // obstacle.obstacle.style.border = "2px solid black";
      obstacle.moveObstacle();
    });
  }

  checkCollisions() {
    console.log(this.obstacles);
    this.obstacles.forEach((obstacle) => {
      if (
        this.player.didCollide(obstacle.obstacle) ||
        this.player.didCollide(obstacle.topObstacle)
      ) {
        this.gameIsOver = true;
      }
    });
  }
  cleanUpObstacles() {
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.left < -obstacle.width) {
        obstacle.obstacle.remove();
        obstacle.topObstacle.remove();
        return false;
      }
      return true;
    });
  }
  generateObstacle() {
    const obstacle = new Obstacle(this.gameScreen);
    this.obstacles.push(obstacle);
  }

  endGame() {
    clearInterval(this.gameIntervalId);
    clearInterval(this.obstacleIntervalId);

    this.gameIsOver = true;

    setTimeout(() => {
      this.gameScreen.style.display = "none";
    }, 2000);
    setTimeout(() => {
      this.gameEndScreen.style.display = "flex";
    }, 2000);
  }
}
