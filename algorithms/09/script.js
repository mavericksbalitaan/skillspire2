function reversedString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  return str == reversedString(str)
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("string"));
