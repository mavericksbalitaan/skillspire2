const generateRandomArray = () => {
  let arr = [];

  for (let i = 0; i < 5; i++) {
    let rand = Math.floor(Math.random() * 100) + 1;
    arr.push(rand);
  }
  return arr;
};

let myArr = generateRandomArray();
console.log(myArr);

const sortArray = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(sortArray(myArr));
