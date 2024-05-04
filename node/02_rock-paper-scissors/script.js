const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt(
  "Please input your selection: \n Select: 1 = Rock; 2 = Paper; 3 = Scissors\n",
);
rl.prompt();

let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

rl.on("line", function (answer) {
  game(answer);

  rl.close();
});

function game(choice) {
  console.log(`Player: ${choice} vs Computer: ${randomNumber}`);
  if (choice == "1" && randomNumber == 2) {
    console.log("Paper defeats Rock. You Lost!");
  } else if (choice == "2" && randomNumber == 3) {
    console.log("Scissors defeats Paper. You Lost!");
  } else if (choice == "3" && randomNumber == 1) {
    console.log("Rock defeats Scissors. You Lost!");
  } else if (choice == "1" && randomNumber == 3) {
    console.log("Rock defeats Scissors. You Win!");
  } else if (choice == "2" && randomNumber == 1) {
    console.log("Paper defeats Rock. You Win!");
  } else if (choice == "3" && randomNumber == 2) {
    console.log("Scissors defeats Paper. You Win!");
  } else {
    console.log("Tie");
  }
}
