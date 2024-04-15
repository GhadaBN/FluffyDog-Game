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
    this.lives = 4;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.obstacleIntervalId = null;
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
    if (this.lives <= 0) {
      this.endGame();
    }
  }

  update() {
    this.player.move();
    this.obstacles.forEach((obstacle) => {
      obstacle.moveObstacle();
    });
  }

  checkCollisions() {
    let collided = false;

    this.obstacles.forEach((obstacle) => {
      // Check collision with bottom obstacle
      if (!obstacle.collided && this.player.didCollide(obstacle.obstacle)) {
        obstacle.collided = true; // Mark the obstacle as collided
        collided = true; // Set collided flag to true
        this.lives--;
        this.updateHeartsDisplay();
      }

      // Check collision with top obstacle
      if (!obstacle.collided && this.player.didCollide(obstacle.topObstacle)) {
        obstacle.collided = true;
        collided = true;
        this.lives--;
        console.log("Lives left:", this.lives);
        this.updateHeartsDisplay();
      }
    });

    if (collided && this.lives <= 0) {
      console.log("Game over");
      this.endGame();
    }
  }

  updateHeartsDisplay() {
    const heartsContainer = document.querySelector(".lives-container");
    const hearts = heartsContainer.querySelectorAll(".heart");
    if (hearts.length > 0) {
      hearts[hearts.length - 1].remove(); // Remove the last heart
    }

    if (this.lives <= 0) {
      this.endGame();
    }
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
