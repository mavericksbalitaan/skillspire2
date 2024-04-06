function multiply(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
}

let arr = [1, 2, 3, 4, 5];

console.log(multiply(arr));
