function rockPaperScissors() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";
  let playerTurn = "";
  let computerTurn = "";
  let recursiveAsyncReadLine = function () {
    readline.question("You choose: ", (word) => {
      playerTurn = word;
      if (playerTurn == "r" || playerTurn == "rock" || playerTurn == "Rock") {
        playerTurn = rock;
      } else if (
        playerTurn == "p" ||
        playerTurn == "paper" ||
        playerTurn == "Paper"
      ) {
        playerTurn = paper;
      } else if (
        playerTurn == "s" ||
        playerTurn == "scissors" ||
        playerTurn == "Scissors"
      ) {
        playerTurn = scissors;
      } else {
        console.log("Invalid Input. Try Again...");
      }

      let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
      switch (computerRandomNumber) {
        case 1:
          computerTurn = "Rock";
          break;
        case 2:
          computerTurn = "Paper";
          break;
        case 3:
          computerTurn = "Scissors";
          break;
      }
      console.log(`The computer chooses: ${computerTurn}`);
      if (
        (playerTurn === rock && computerTurn === scissors) ||
        (playerTurn === paper && computerTurn === rock) ||
        (playerTurn === scissors && computerTurn === paper)
      ) {
        console.log("You win!");
        recursiveAsyncReadLine();
      } else if (
        (playerTurn === scissors && computerTurn === rock) ||
        (playerTurn === rock && computerTurn === paper) ||
        (playerTurn === paper && computerTurn === scissors)
      ) {
        console.log("You lose!");
        recursiveAsyncReadLine();
      } else {
        console.log("This game was a draw");
        recursiveAsyncReadLine();
      }
    });
  };
  recursiveAsyncReadLine();
}
rockPaperScissors();
