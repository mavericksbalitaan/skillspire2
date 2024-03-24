// 1
const fn1 = (x, y) => {
  console.log(x * y);
  console.log(x / y);
  console.log(x + y);
  console.log(x - y);
};

fn1(1, 2);

// 2
const fn2 = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i += 1) {
    sum += i;
  }
  return sum;
};

console.log(fn2(5));
