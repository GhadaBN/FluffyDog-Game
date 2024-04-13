window.onload = function () {
  const startButton = document.querySelector(".start-button");
  const restartButton = document.querySelector(".restart-button");
  this.startScreen = document.querySelector("#game-intro");
  this.gameScreen = document.querySelector("#game-screen");
  this.gameEndScreen = document.querySelector("#game-end");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
    this.startScreen.style.display = "none"; // Hide the intro screen
    this.gameScreen.style.display = "flex"; // Show the game screen
  }
};
