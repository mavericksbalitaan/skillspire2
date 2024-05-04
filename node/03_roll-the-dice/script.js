const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("Please select a value between 1 and 6. \n");
rl.prompt();

rl.on("line", function (answer) {
  rollDice(answer);

  rl.close();
});

function rollDice(answer) {
  let tries = 0;
  let rolledNumber;

  while (answer != rolledNumber) {
    rolledNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log(`Rolled Number: ${rolledNumber} `);
    tries++;
  }
  console.log(`You have successfully rolled ${answer} after ${tries} tries.`);
}
