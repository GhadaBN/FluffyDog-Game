class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");
    this.player = new Player(
      this.gameScreen,
      220,
      100,
      80,
      68,
      "../images/player-icon.png"
    );
    this.height = 960;
    this.width = 540;
    this.obstacles = [];
    this.gap = 330;
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    // this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.gameIntervalId = setInterval(() => this.gameLoop(), 20);
    setInterval(() => this.generateObstacle(), 3000);
  }

  generateObstacle() {
    let randomHeight = Math.random() * 80; // Random height within adjusted range
    const obstacle = new Obstacle(
      this.gameScreen,
      960,
      randomHeight,
      this.gap,
      "../images/pipe-bottom.png",
      "../images/pipe-top.png"
    );
    this.obstacles.push(obstacle);
  }

  gameLoop() {
    this.player.move();
    this.obstacles.forEach((obstacle, index) => {
      obstacle.move();
      this.checkCollision(obstacle, index);
    });
  }

  checkCollision(obstacle, index) {
    if (
      obstacle.obstacleLeft + obstacle.width < 140 ||
      obstacle.obstacleLeft > 300
    ) {
      return; // Skip collision check if obstacle is not aligned with the player
    }
    let obstacleTopHeight = obstacle.obstacleBottom + this.gap;
    if (
      this.player.bottom < obstacle.obstacleBottom + obstacle.height ||
      this.player.bottom + this.player.height > obstacleTopHeight
    ) {
      this.gameOver();
    }
    if (obstacle.obstacleLeft < -obstacle.width) {
      // Remove obstacles that move past the left edge
      this.obstacles.splice(index, 1);
      obstacle.remove();
    }
  }

  gameOver() {
    clearInterval(this.gameIntervalId);
    this.gameIsOver = true;
    this.gameEndScreen.style.display = "flex";
    console.log("Game Over");
  }
}
