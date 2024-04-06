function greaterthanY(arr, y) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count += 1;
    }
  }
  return count;
}

const arr = [1, 3, 5, 7];

console.log(greaterthanY(arr, 3));
