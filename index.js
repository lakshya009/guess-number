var nog = document.getElementById("noOfGuess");
var gn = document.getElementById("guessedNum");
var msg = document.getElementById("message");

var answer = Math.floor(Math.random() * 100) + 1;
var noOfGuesses = 0;
var guessedNumber = [];

function play() {
    var userGuess = document.getElementById('guess').value;
    if (userGuess < 1 || userGuess > 100) {
        alert("Please Input Valid Number");
    }
    else {
        guessedNumber.push(userGuess);
        noOfGuesses += 1;
        if (noOfGuesses == 10) {
            document.getElementById("btn").disabled = true;
            document.getElementById("btn").style.background = "hsl(217, 19%, 24%)";
            document.getElementById("btn").style.cursor = "default";
            let btn = document.getElementById("btn2");
            btn.style.display = "block";
            btn.onclick = function () {
                window.location.reload();
            };
            nog.textContent = "Game Over ! You Lost... Refresh Or Click Below to Play Again :)";
            gn.textContent = "No. of Guesses: " + noOfGuesses + ".  &   The Number was: " + answer;
            msg.textContent = "You Picked: " + guessedNumber;
        }
        else if (userGuess < answer) {
            nog.textContent = "Your Guess is LOW."
            gn.textContent = "No. of Guesses: " + noOfGuesses;
            msg.textContent = "Guessed Numbers are: " + guessedNumber;
        }

        else if (userGuess > answer) {
            nog.textContent = "Your Guess is HIGH."
            gn.textContent = "No. of Guesses: " + noOfGuesses;
            msg.textContent = "Guessed Numbers are: " + guessedNumber;
        }
        else if (userGuess == answer) {
            document.getElementById("btn").disabled = true;
            document.getElementById("btn").style.background = "hsl(217, 19%, 24%)";
            document.getElementById("btn").style.cursor = "default";
            let btn = document.getElementById("btn2");
            btn.style.display = "block";
            btn.onclick = function () {
                window.location.reload();
            };
            nog.textContent = "YOHO! You Won. Refresh Or Click Below to Restart the Game ! 😉"
            gn.textContent = "No. of Guesses: " + noOfGuesses + ".     The Number was: " + answer;
            msg.textContent = "Guessed Numbers are: " + guessedNumber;
        }
    }

}
