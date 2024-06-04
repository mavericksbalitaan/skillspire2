function bookIndex(array) {
  let start = array[0];
  let end = start;
  let output = "";

  for (let i = 1; i < array.length; i++) {
    if (array[i] == end + 1) {
      end = array[i];
    } else {
      if (start == end) {
        output += start + ",";
      } else {
        output += start + "-" + end + ",";
      }
      start = array[i];
      end = start;
    }
  }

  if (start == end) {
    output += start;
  } else {
    output += start + "-" + end;
  }

  return output;
}

const pageNums = [1, 13, 14, 15, 16, 37, 38, 39, 70];
console.log(bookIndex(pageNums));
