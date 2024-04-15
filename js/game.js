class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      220,
      100,
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
    this.gameLoopFrequency = Math.round(1000 / 60);
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    // Start the game loop
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, 20);

    // Start generating obstacles
    setInterval(() => {
      if (!this.gameIsOver) {
        this.generateObstacle();
      }
    }, 3000);
  }

  gameLoop() {
    this.update();
    this.checkCollisions();
    this.cleanUpObstacles();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  update() {
    console.log("in the update");
    this.player.move();
    this.obstacles.forEach((obstacle) => obstacle.moveObstacle());
  }
  checkCollisions() {
    this.obstacles.forEach((obstacle) => {
      if (this.player.didCollide(obstacle)) {
        this.gameIsOver = true;
        console.log("Game Over!");
      }
    });
  }
  cleanUpObstacles() {
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.left < -obstacle.width) {
        this.gameScreen.removeChild(obstacle.element);
        return false;
      }
      return true;
    });
  }

  generateObstacle() {
    const obstacle = new Obstacle(this.gameScreen);
    this.obstacles.push(obstacle);
  }
}
