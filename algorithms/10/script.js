function removeWhitespaces(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      output += str[i];
    }
  }

  return output;
}

console.log(removeWhitespaces("        whitespaces     are     cool        "));
