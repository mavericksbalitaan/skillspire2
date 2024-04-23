function zipArrays(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  return newArr;
}

const array1 = [1, 3, 5];
const array2 = [2, 4];

console.log(zipArrays(array1, array2));
