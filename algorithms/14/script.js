function pushFront(arr, num) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = num;
  return arr;
}

let arr = [2, 3, 4, 5];

console.log(pushFront(arr, 1));
