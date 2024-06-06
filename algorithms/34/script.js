function characterMap(string) {
  let charMap = {};

  for (let char of string) {
    if (charMap[char]) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
}

const sample = "aaabbb";
console.log(characterMap(sample));
