window.onload = function () {
  const startButton = document.querySelector(".start-button");
  const restartButton = document.querySelector("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }
  function control(event) {
    if (event.keyCode === 38 || event.keyCode === 32) {
      game.player.jump();
    }
  }

  document.addEventListener("keydown", control);
};
