function addIntermediateSums(array) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    result.push(array[i]);

    if ((i + 1) % 10 === 0) {
      result.push(sum);
      sum = 0;
    }
  }

  if (array.length % 10 != 0) {
    result.push(sum);
  }

  return result;
}

let arr = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
console.log(addIntermediateSums(arr)); // [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 15, 1, 2, 1, 2, 6]
