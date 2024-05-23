function greeting(name) {
  let greeting = "";
  greeting += name.charAt(1).toUpperCase() + name.slice(2) + " to the " + name.charAt(0) + "!";
  return greeting;
}

const string = "Dylan";

console.log(greeting(string))
