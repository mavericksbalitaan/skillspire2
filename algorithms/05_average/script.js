function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

let arr = [1, 2, 3, 4, 5];

console.log(average(arr));

