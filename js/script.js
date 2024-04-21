window.onload = function () {
  const startButton = document.querySelector(".start-button");
  const restartButton = document.querySelector(".restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function startGame() {
    game = new Game();
    game.start();
  }

  function restartGame() {
    location.reload();
  }

  function control(event) {
    if (event.keyCode === 38 || event.keyCode === 32) {
      game.player.jump();
    }
  }

  document.addEventListener("keyup", control);
};
