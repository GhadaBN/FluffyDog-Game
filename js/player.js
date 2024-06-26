class Player {
  constructor(gameScreen, left, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.bottom = 160;
    this.width = width;
    this.height = height;
    this.minHeight = 140;
    this.jumpStrength = 25;
    this.gravity = 2;
    this.isJumping = false;
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.bottom = `${this.bottom}px`;
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
    if (this.bottom < this.minHeight) {
      this.bottom = this.minHeight;
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
    const obstacleRect = obstacle.getBoundingClientRect();
    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      console.log("Crash!");
      return true;
    } else {
      return false;
    }
  }
}
