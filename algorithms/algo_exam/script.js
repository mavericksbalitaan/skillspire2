// item 1
function print1To255() {
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
}

// print1To255();

// item 2
function printIntsAndSum0To255() {
  let sum = 0;
  for (let i = 0; i <= 255; i++) {
    sum += i;
    console.log(i, sum);
  }
}

// printIntsAndSum0To255();

// item 3
function printOdds1To255() {
  for (let i = 0; i <= 255; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

// printOdds1To255();

// item 4
function printArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// const array = [1, 2, 3, 4, 5];

// printArrayVals(array);

// item 5
function returnOddsArray1To255() {
  let arr = [];
  for (let i = 0; i <= 255; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}

// console.log(returnOddsArray1To255());

// item 6
function printMaxOfArray(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// const array = [1, 2, 3, 4, 5];

// console.log(printMaxOfArray(array));

// item 7
function printAverageOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

// const array = [1, 2, 3, 4, 5];

// console.log(printAverageOfArray(array));

// item 8
function printMaxMinAverageVals(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  return [min, max, sum / arr.length];
}

// const array = [1, 2, 3, 4, 5];

// console.log(printMaxMinAverageVals(array));

// item 9
function returnArrayCountGreaterThanY(arr, Y) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count++;
    }
  }
  return count;
}

// const array = [1, 2, 3, 4, 5];
// console.log(returnArrayCountGreaterThanY(array, 3));

// item 10
function swapStringForArrayNegativeVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Skillspire";
    }
  }
  return arr;
}

// const array = [1, 2, -3, 4, 5];

// console.log(swapStringForArrayNegativeVals(array));

// item 11
function squareArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}

// const array = [1, 2, -3, 4, 5];

// console.log(squareArrayVals(array));

// item 12
function shiftArrayValsLeft(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = 0;
  return arr;
}

// const array = [1, 2, 3, 4, 5];

// console.log(shiftArrayValsLeft(array));

// item 13
function swapValues(arr) {
  let temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  return arr;
}

// const array = [1, 2];

// console.log(swapValues(array));

// item 14
function swapPairs(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

const array = [1, 2, 3, 4];

console.log(swapPairs(array));
