function removeAt(arr, index) {
  let removeVal = arr[index];
  for (i = index; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr.pop();

  return [arr, removeVal];
}

const array = [1, 2, 3, 4, 5];
const idx = 2;

console.log(removeAt(array, idx));
