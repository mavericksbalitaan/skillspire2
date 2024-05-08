function acronym(string) {
  let splitStr = string.split(" ");
  let acronym = "";

  for (let i = 0; i < splitStr.length; i++) {
    acronym += splitStr[i].charAt(0).toUpperCase();
  }

  return acronym;
}

const str = "there's no free lunch gotta pay yer way";
const str2 = "Live from New York it's Saturday Night";

console.log(acronym(str));
console.log(acronym(str2));
