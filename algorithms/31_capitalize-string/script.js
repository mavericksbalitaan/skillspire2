function capitalizeString(string) {
  let output = `${string[0].toUpperCase()}`;

  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] == " ") {
      output += string[i].toUpperCase();
    } else {
      output += string[i];
    }
  }

  return output;
}

const sample = "hello there skillspire";
console.log(capitalizeString(sample));
