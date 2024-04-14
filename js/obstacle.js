class Obstacle {
  constructor(gameScreen, left, bottom, gap, imgSrcBottom, imgSrcTop) {
    this.gameScreen = gameScreen;
    this.obstacleLeft = left;
    this.obstacleBottom = bottom;
    this.width = 60;
    this.height = 200;
    this.gap = gap;

    // Bottom obstacle
    this.bottomObstacle = document.createElement("img");
    this.bottomObstacle.src = "../images/pipe-bottom.png";
    this.bottomObstacle.style.position = "absolute";
    this.bottomObstacle.style.left = `${this.obstacleLeft}px`;
    this.bottomObstacle.style.bottom = `${this.obstacleBottom}px`;
    this.bottomObstacle.style.width = `${this.width}px`;
    this.bottomObstacle.style.height = `${this.height}px`;
    this.gameScreen.appendChild(this.bottomObstacle);

    // Top obstacle
    this.topObstacle = document.createElement("img");
    this.topObstacle.src = "../images/pipe-top.png";
    this.topObstacle.style.position = "absolute";
    this.topObstacle.style.left = `${this.obstacleLeft}px`;
    this.topObstacle.style.bottom = `${
      this.obstacleBottom + this.height + this.gap
    }px`;
    this.topObstacle.style.width = `${this.width}px`;
    this.topObstacle.style.height = `${this.height}px`;
    this.gameScreen.appendChild(this.topObstacle);
  }

  move() {
    this.obstacleLeft -= 2;
    this.bottomObstacle.style.left = `${this.obstacleLeft}px`;
    this.topObstacle.style.left = `${this.obstacleLeft}px`;
    if (this.obstacleLeft < -this.width) {
      this.remove();
    }
  }

  remove() {
    this.gameScreen.removeChild(this.bottomObstacle);
    this.gameScreen.removeChild(this.topObstacle);
  }
}
