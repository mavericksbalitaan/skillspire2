function findMedian(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  arr3.sort((a, b) => a - b);

  let median = Math.floor(arr3.length / 2);

  if (arr3.length % 2 == 0) {
    return (arr3[median] + arr3[median - 1]) / 2;
  }

  return arr3[median];
}

const arr1 = [1, 5, 9];
const arr2 = [1, 2, 3, 4, 5, 6];

// Given ([1,5,9], [1,2,3,4,5,6]), return 4.
// Given ([1,5,9], [1,2,3,4,5]), return 3.5.

console.log(findMedian(arr1, arr2));
