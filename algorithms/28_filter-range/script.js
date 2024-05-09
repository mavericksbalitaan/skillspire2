function filterRange(arr, min, max) {
  let newArr = [];
  for (let i = min; i <= max; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

const arr = [1, 2, 3, 4, 5];

console.log(filterRange(arr, 2, 4));
