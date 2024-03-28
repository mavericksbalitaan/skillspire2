const userInp = prompt("Please input a number: from 1 to 100");

for (let i = 1; i <= userInp; i++) {
  i % 2 == 0 ? console.log("Even number", i) : console.log("Odd number", i);
}
