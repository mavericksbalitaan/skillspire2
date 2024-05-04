function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr.push(...flatten(arr[i]));
    } else if (arr[i] !== undefined) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

const array = [1, [2, 3], 4, []];

console.log(flatten(array));
