// 1
const printInDescending = (num) => {
  for (let i = num; i > 0; i -= 1) {
    console.log(i);
  }
};

printInDescending(10);

// 2
const printEvenInDescending = (num) => {
  for (let i = num; i > 0; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};

printEvenInDescending(10);

// 3
const maxNum = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log(maxNum(1, 2));

// 4
const totalSum = (num) => {
  let sum = 0;

  for (let i = 0; i < num + 1; i++) {
    sum += i;
  }
  return sum;
};

console.log(totalSum(5));
