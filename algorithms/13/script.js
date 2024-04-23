function mintofront(arr) {
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  const minValue = arr[minIndex];
  for (let i = minIndex; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = minValue;

  return arr;
}

const sample = [4, 2, 1, 3, 5];

console.log(mintofront(sample));
