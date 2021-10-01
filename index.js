var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img1").src = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


var winnerString = "Draw!";
if (randomNumber1 > randomNumber2) {
  winnerString = "🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  winnerString = "Player 2 Wins! 🚩";
}

document.querySelector("h1").textContent = winnerString;
