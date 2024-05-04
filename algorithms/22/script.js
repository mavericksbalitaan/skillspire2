function mode(arr) {
  let obj = {};
  let maxFreq = 0;
  let mostFreq;

  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];

    obj[cur] = (obj[cur] || 0) + 1;

    if (obj[cur] > maxFreq) {
      maxFreq = obj[cur];
      mostFreq = cur;
    }
  }
  return mostFreq;
}

const array = [1, 2, 2, 3, 4, 5];

console.log(mode(array));
