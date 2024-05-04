const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("Please input number of units sold. \n");

rl.prompt();

rl.on("line", function (answer) {
  computeDiscount(answer);

  rl.close();
});

function computeDiscount(answer) {
  let cost;
  let discount;

  if (answer >= 100) {
    discount = 50;
  } else if (answer >= 50 && answer <= 99) {
    discount = 40;
  } else if (answer >= 20 && answer <= 49) {
    discount = 30;
  } else if (answer >= 10 && answer <= 19) {
    discount = 20;
  } else {
    discount = 0;
  }

  cost = answer * 99 - answer * 99 * (discount / 100);
  console.log(
    `Total cost is $${parseFloat(cost).toFixed(2)} with ${discount}% discount.`,
  );
}
