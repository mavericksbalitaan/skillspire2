function removeEvenLengthStrings(arr) {
  return arr.filter((el) => el.length % 2 != 0);
}

const array = [
  "Nope!",
  "Its",
  "Kris",
  "starting",
  "with",
  "K!",
  "(instead",
  "of",
  "Chris",
  "with",
  "C)",
  ".",
];

console.log(removeEvenLengthStrings(array));
