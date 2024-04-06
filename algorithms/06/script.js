const addOnes = (str) => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 1) {
      sum += 1;
    }
  }
  return sum;
};

console.log(addOnes("1001011"));
