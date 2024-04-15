class Player {
  constructor(gameScreen, left, bottom, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
    this.jumpStrength = 25;
    this.gravity = 2;
    this.isJumping = false;

    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.bottom = `${bottom}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    if (this.isJumping) {
      // Update player's position based on jump
      this.bottom += this.jumpStrength;

      // Set isJumping to false to simulate gravity
      this.isJumping = false;
    } else {
      // Apply gravity
      this.bottom -= this.gravity;
    }

    // Update the player's position on the screen
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
  }

  jump() {
    this.isJumping = true;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    return (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    );
  }
}
