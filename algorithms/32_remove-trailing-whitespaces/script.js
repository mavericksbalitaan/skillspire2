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

function removeTrailingWhitespaces(string) {
  let start = 0;
  let end = string.length - 1;
  let output = "";

  while (string[start] == " ") start++;
  while (string[end] == "") end--;

  for (let i = start; i <= end; i++) {
    output += string[i];
  }

  return capitalizeString(output);
}

const sample = "      whitspaces are cool      ";

console.log(removeTrailingWhitespaces(sample));
