let game = { min: 1, max: 10 };

document.addEventListener("DOMContentLoaded", function () {
  game.output = document.querySelector(".output");
  game.message = document.querySelector(".message");
  game.guessInput = document.querySelector("input");
  game.btn = document.querySelector("button");
  game.btn.addEventListener("click", guessValue);
  init();
});

function guessValue() {
  console.log("your guess is " + game.guessInput.value);
}

function init() {
  game.num = randomNumber(game.min, game.max);
  let tempMes = "Guess a number from " + game.min + " to " + game.max;
  message(tempMes, "yellow");
}

// This function creates a random number depending on min and max values that given
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

// This function creates a message with a color and puts it into html code
function message(mes, clr) {
  game.message.innerHTML = mes;
  game.message.style.color = clr || "black";
}
