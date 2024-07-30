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
