let game = { min: 1, max: 10 };
document.addEventListener("DOMContentLoaded", function () {
  game.output = document.querySelector(".output");
  game.message = document.querySelector(".message");
  game.guessInput = document.querySelector("input");
  game.btn = document.querySelector("button");
  init();
});

function init() {
  let tempMes = "Guess a number from " + game.min + " to " + game.max;
  message(tempMes, "black");
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

function message(mes, clr) {
  game.message.innerHTML = mes;
  game.message.style.color = clr || "black";
}
