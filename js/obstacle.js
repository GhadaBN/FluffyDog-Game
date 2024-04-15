class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.randomHeight = Math.random() * 80;
    this.left = 960;
    this.bottom = this.randomHeight;
    this.width = 60;
    this.height = 200;
    this.gap = 330;

    //create bottom obstacle:
    this.obstacle = document.createElement("img");
    this.obstacle.src = "../images/pipe-bottom.png";
    this.obstacle.style.position = "absolute";
    this.obstacle.style.left = `${this.left}px`;
    this.obstacle.style.bottom = `${this.bottom}px`;
    this.gameScreen.appendChild(this.obstacle);

    //create top obstacle:
    this.topObstacle = document.createElement("img");
    this.topObstacle.src = "../images/pipe-top.png";
    this.topObstacle.style.position = "absolute";
    this.topObstacle.style.left = `${this.left}px`;
    this.topObstacle.style.bottom = `${this.bottom + this.gap}px`;

    this.gameScreen.appendChild(this.topObstacle);
  }

  moveObstacle() {
    this.left -= 2;
    this.updatePosition();
  }
  updatePosition() {
    this.topObstacle.style.left = `${this.left}px`;
    this.topObstacle.style.bottom = `${this.bottom + this.gap}px`;
    this.obstacle.style.left = `${this.left}px`;
    this.obstacle.style.bottom = `${this.bottom}px`;
  }
}
