function parensValid(str) {
  let count = 0;

  for (let char of str) {
    if (char === "(") {
      count++;
    } else if (char === ")") {
      if (count === 0) return false;
      count--;
    }
  }

  return count === 0;
}

const string = "(()())";
const string2 = ")()";

console.log(parensValid(string2));
