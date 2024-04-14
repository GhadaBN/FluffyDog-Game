class Player {
  constructor(gameScreen, left, bottom, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
    this.gravity = 2;
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.bottom -= this.gravity;
    this.element.style.bottom = `${this.bottom}px`;
  }

  jump() {
    if (this.bottom < 280) {
      this.bottom += 25;
      this.element.style.bottom = `${this.bottom}px`;
    }
  }

  // didCollide(obstacle) {
  //   const obstacleLeft = obstacle.obstacleLeft;
  //   const obstacleBottom = obstacle.obstacleBottom;
  //   return (
  //     this.left > obstacleLeft - 20 &&
  //     this.left < obstacleLeft + 20 &&
  //     this.bottom > obstacleBottom - 20 &&
  //     this.bottom < obstacleBottom + 20
  //   );
  // }
}
