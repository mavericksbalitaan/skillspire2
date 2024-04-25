function shorterStrings(arr, val) {
  return arr.filter((el) => el.length >= val);
}

const array = ["you", "I", "ab"];

console.log(shorterStrings(array, 3));
