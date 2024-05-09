const minToFront = (arr) => {
  let minIndex = 0;
  let minValue = arr[0];

  // Find the index of the minimum element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      minIndex = i;
    }
  }

  // Shift elements backward to make space for the minimum element
  for (let i = minIndex; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  // Place the minimum element at the front of the array
  arr[0] = minValue;

  return arr;
};

// Test the function
let arr = [4, 2, 1, 3, 5];
console.log(minToFront(arr));
