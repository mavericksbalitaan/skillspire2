function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (arr.length - 1 - 0) + 0);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const arr = [1, 2, 3];

console.log(shuffle(arr));
