window.onload = function () {
  const startButton = document.querySelector(".start-button");
  const restartButton = document.querySelector(".restart-button");
  const startScreen = document.querySelector("#game-intro");
  const gameScreen = document.querySelector("#game-screen");
  const gameEndScreen = document.querySelector("#game-end");
  let game;

  function startGame() {
    console.log("Start game");
    game = new Game();
    game.start();
    startScreen.style.display = "none"; // Changed `this.startScreen` to `startScreen`
    gameScreen.style.display = "flex"; // Changed `this.gameScreen` to `gameScreen`
  }

  function restartGame() {
    console.log("Restart game");
    game.restart();
  }

  // Event listener for starting the game
  startButton.addEventListener("click", startGame);

  // Event listener for restarting the game
  restartButton.addEventListener("click", restartGame);

  // Keyboard control for player jump
  document.addEventListener("keyup", (event) => {
    if (event.key === " " || event.key === "ArrowUp") {
      if (game && game.player) {
        game.player.jump();
      }
    }
  });
};
