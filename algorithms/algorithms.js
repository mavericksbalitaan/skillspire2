// Create a function that accepts 2 parameters x and y. This function should print out the product of both numbers (x * y), the quotient of both numbers (x/y), the sum of both numbers (x + y), and the difference of both numbers (x-y).​

// 1. Create a function that accepts two number parameters
// 2. Print the product of x and y
// 3. Print the quotient of x and y
// 4. Print the sum of x and y
// 5. Print the difference of x and y

function operations(x, y) {
  console.log(`The product of ${x} and ${y} is equal to`, x * y);
  console.log(`The quotient of ${x} and ${y} is equal to`, x / y);
  console.log(`The sum of ${x} and ${y} is equal to`, x + y);
  console.log(`The difference of ${x} and ${y} is equal to`, x - y);
}

operations(10, 5);

// Create a function that accepts a number parameter and prints the sum of all of the numbers from 0 to that number. For example if given 5 prints ( 0 + 1 + 2 + 3 + 4 + 5) or 15.

// 1. Create a function that accepts a number parameter
// 2. Create a variable called sum and set it to zero
// 3. Create a for loop that starts from 0 and ends at the number parameter
// 4. Inside the for loop, add the current iteration to the variable sum
// 5. After the for loop, print the variable sum

function sum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum = sum + i;
  }
  console.log(`The sum of all the numbers from 0 to ${num} is equal to`, sum);
}

sum(5);

// Create a program that prints out all numbers from 10 to 1 in descending order. (This does not have to be in a function)​

// 1. Create a for loop that starts from 10 and ends at 1.
// 2. Inside the for loop, print the current iteration using console.log

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Create a program that prints out all EVEN numbers from 10-1 in descending order. HINT: Use modulus operator or have your for loop decrement by 2 (This does not have to be in a function)​

// 1. Create a for loop that starts from 10 and ends at 1.
// 2. Inside the for loop, check if the current iteration is an EVEN number.

for (let i = 10; i >= 1; i--) {
  if (i % 2 == 0) {
    console.log("EVEN");
  } else {
    console.log(i);
  }
}

// Create a function that accepts 2 numbers as parameters. Return the larger of the two numbers. For example if given 9 and 10 your function should return 10

// 1. Create a function that accepts 2 numbers as parameters.
// 2. Check if the first number is greater than the second number, if it's greater return the first number.
// 3. Check if the second number is greater than the first number, if it's greater return the second number.
// 4. Check if the first and second number is equal, if it's equal return "the numbers are equal".

function largerNumber(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    throw new Error("Not a number");
  }
  if (num1 > num2) {
    console.log(num1);
    return num1;
  } else if (num1 < num2) {
    console.log(num2);
    return num2;
  } else {
    console.log("the numbers are equal");
    return "the numbers are equal";
  }
}

largerNumber(10, 10);

// Create a function that accepts an array as a parameter and multiplies every value in that array by 2. Return the same array at the end of the function. Given [1,2,3,4,5] return [2,4,6,8,10]

// 1. Create a function that accepts an array as a parameter.
// 2. Initialize a new empty array and assign it to a variable
// 3. Inside the for-loop, multiply every value to 2 and push it to the new array
// 4. Return the new array

function multiplier(array) {
  let newArray = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * 2;
  }

  console.log(newArray);
  return newArray;
}

multiplier([1, 2, 3, 4, 5]);

// Create a function that accepts an array as a parameter and returns the average value of all the numbers in that array. To find the average take the sum of all numbers in the array and divide it by the length of the array. Given [1,2,3,4,5] return 3. (1+2+3+4+5) = 15..... 15/5=3.

// 1. Create a function that accepts an array as a parameter.
// 2. Assign a new variable sum and equate it to 0.
// 3. Create a for-loop.
// 4. Inside the for-loop, iterate every value and add it to the new variable sum.
// 5. Divide the sum to the length of the array and return the sum

function averageInArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(sum / array.length);
  return sum / array.length;
}

averageInArray([1, 2, 3, 4, 5]);

// Create a function that accepts an array as a parameter and pops off all of the values in an array. After popping off a value print out the value to the console. Hint: array.pop() is a function that pops off the last value in an array, this function also returns that value that it has popped off. Example running array.pop() on the following array [1,2,3,4,5] will pop off the last value in the array and return 5. The array will then become [1,2,3,4]. Use a while loop! (optional)

// 1. Create a function that accepts an array as a parameter.
// 2. Create a while-loop and use the condition when the array length is greater than 0.
// 3. Inside the while-loop, use array.pop() to pop off the last value in an array and print that value.

function popArray(array) {
  while (array.length > 0) {
    console.log("popArray", array.pop());
  }
}

popArray([1, 2, 3, 4, 5]);

// Create a function that accepts a string of 1’s and 0’s and returns a count of all of the 1’s in that string. Example: Given “1001011” return 4. Hint: Remember that strings are just an array of characters that can’t be altered. No built in functions unless they are absolutely necessary.

// 1. Create a function that accepts a string of 1's and 0's
// 2. Create a new variable called counter and set it to 0.
// 2. Create a for-loop and iterate every value
// 3. Check each value if it is equal to 1. If it is, increment the counter variable.
// 4. After the for-loop, return the counter variable

function countOnes(string) {
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == 1) {
      counter++;
    }
  }

  console.log("countOnes:", counter);
  return counter;
}

countOnes("1001011");

// Given an array of numbers create a function that returns the max value in that array. Given [2,3,1,5,4] return 5. What is the initial max value?

// 1. Create a function that accepts an array as a parameter
// 2. Assign a new variable called min and set it to the first element of the array
// 3. Create a for-loop and inside the for-loop compare each iteration if it greater than the max. If greater then reassign it to the variable max
// 4. After the for-loop, return the variable max

function maxValue(array) {
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  console.log("maxValue", max);
  return max;
}

maxValue([2, 3, 1, 5, 4]);

// Given an array of numbers create a function that returns the min value in that array. Given [2,3,1,5,4] return 1. What is the initial min value?

// 1. Create a function that accepts an array as a parameter
// 2. Assign a new variable called min and set it to the first element of the array
// 3. Create a for-loop and inside the for-loop compare each iteration if it lesser than the min. If lesser then reassign it to the variable min
// 4. After the for-loop, return the variable min

function minValue(array) {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  console.log("minValue", min);
  return min;
}

minValue([2, 3, 1, 5, 4]);

// Create a function that accepts a string of 1’s and 0’s and returns a new string where all of the 1's are replaced by 2's. Example: Given “1001011” return "2002022". Hint: Remember that strings are just an array of characters that can’t be altered. So you will have to create a new string from scratch and use that as your return string. No built in functions unless they are absolutely necessary.

// 1. Create a function that accepts a string of 1's and 0's
// 2. Initialize an empty string and assign it to a new variable
// 3. Create a for-loop and for each iteration check the value if it is equal to 1
// 4. If equal to 1, return 2 and add it to the new string. If equal to 0, add it to the new string
// 5. After the for-loop, return the value of the new string

function twos(string) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] == 1) {
      newString += 2;
    } else {
      newString += string[i];
    }
  }

  console.log(newString);
  return newString;
}

twos("1001011");

// -Create a function that accepts a string and returns that string but reversed. Example: Given "string" return "gnirts"
// -Given an string create a function that checks to see if a string is a palindrome. A palindrome is a word that is spelled the same forward and backwards like “racecar”, “mom”, and “dad”.Hint: Reference the reverse string algorithm. No built functions unless absolutely needed!

// 1. Create a function that accepts a string as a parameter
// 2. Assign a new variable string and set it to an empty string
// 3. Create a for-loop that starts from the string length and ends to the first character of the string
// 4. Inside the for-loop, add the character to the new string
// 5. Return the new string

function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  console.log("reversedString", reversed);
  return reversed;
}

reverseString("try");

// 1. Create a function that accepts a string as a paramter
// 2. Using the reverseString function, check if the given string is equal to the reversed string
// 3. Return true if equal otherwise return false if is not a palindrome

function isPalindrome(string) {
  if (string == reverseString(string)) {
    console.log("isPalindrome", string, true);
    return true;
  } else {
    console.log("isPalindrome", string, false);
    return false;
  }
}

isPalindrome("racecar");

// -Create a function that accepts an input string and removes all white spaces from that string. Given  "        whitespaces     are     cool        "  return “whitespacesarecool”. Hint: You need to create a new string and return that string with the updated characters.
// 1. Create a function that accepts a string
// 2. Assign a new variable and set it to an empty string
// 3. Create a for-loop and for each iteration check if it is an empty space
// 4. If not empty, add the character to the new string

function removeWhiteSpaces(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] != " ") {
      newString += string[i];
    }
  }
  console.log(newString);
  return newString;
}

removeWhiteSpaces("        whitespaces     are     cool        ");

// -Shift Array Values Left shiftArrayValsLeft(arr). Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array. Given [1,2,3,4,5] return [2,3,4,5,0]
// 1. Create a function that accepts an array as a parameter.
// 2. Create a for-loop and for each iteration assign the index of that iteration by minus one
// 3. On the last iteration, assign 0 to the last index

function shiftArrayValsLeft(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array[array.length - 1] = 0;
  console.log(array);
  return array;
}

shiftArrayValsLeft([1, 2, 3, 4, 5]);

// Given an array with only 2 values. Swap the places of those 2 values and return the altered array. Given [1,2] return [2,1]. Hint: Use a temporary variable to store a value!
// 1. Create a function that accepts an array with only 2 values as a parameter
// 2. Assign a new variable and set it to 0
// 3. Assign

function swapValue(array) {
  let temp = array[0];
  array[0] = array[1];
  array[1] = temp;

  console.log("swapValue", array);
  return array;
}

swapValue([1, 2]);

// Array: Push Front. Given array and an additional value, create a function that inserts this value at the beginning of the array. Do this without using any built-in array methods except push(). Given [2,3,4,5],1 return [1,2,3,4,5]. Hint: Push the value to the end of the array. Use the swap method to move the value to the front.
// 1. Create a function that accepts an array and a number
// 2. Push the given number to the array
// 3. Create a for-loop and for each iteration swap the value of that iteration to the previous value by using a temporary variable

function pushFront(array, num) {
  array.push(num);

  for (let i = array.length - 1; i > 0; i--) {
    let temp = array[i];
    array[i] = array[i - 1];
    array[i - 1] = temp;
  }

  console.log("pushFront", array);
  return array;
}

pushFront([2, 3, 4, 5], 1);
