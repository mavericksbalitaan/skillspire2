function reversed(string) {
  let splitStr = string.split(" ");
  return splitStr.reverse().join(" ");
}

const string = "This is a test";

console.log(reversed(string));
