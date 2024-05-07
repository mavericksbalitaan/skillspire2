function noDups(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

const arr = [1, 2, 1, 3, 4, 2, 1];

console.log(noDups(arr));
