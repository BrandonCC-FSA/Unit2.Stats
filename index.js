/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // keep track of the total (starting at 0)
  let total = 0; // must remain outside the loop so it doesn't reset
  // go through each number one at a time
  for (let i = 0; i < numbers.length; i = i + 1) {
    const currentNum = numbers[i];
    total = total + currentNum;
  } // (i) = index number, set (i=0) to start at index number zero
  // add the number to the total
  // return the total
  return total;
  // return numbers.reduce((total, num) => total + num, 0); // what i originally had
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // return getSum(numbers) / numbers.length;
  const total = getSum(numbers);
  const mean = total / getLength(numbers);
  return mean;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // return Math.min(...numbers);
  let smallestNumber = numbers[0];
  // look at each number and compare them to find the smallest
  for (let i = 0; i < numbers.length; i = i + 1) {
    // if the current number is smaller than the smallest number
    const currentNumber = numbers[i];
    // as we go, update the smallest number
    if (currentNumber < smallestNumber) {
      smallestNumber = currentNumber;
    }
  }
  // keep track of the smallest number
  // return the smallest number
  return smallestNumber;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // return Math.max(...numbers);
  let largestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i = i + 1) {
    const currentNumber = numbers[i];
    if (currentNumber > largestNumber) {
      largestNumber = currentNumber;
    }
  }
  return largestNumber;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  const evens = [];
  for (let i = 0; i < numbers.length; i = i + 1) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const odds = [];
  for (let i = 0; i < numbers.length; i = i + 1) {
    if (numbers[i] % 2 !== 0) {
      odds.push(numbers[i]);
    }
  }
  return odds;
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const numAsString of strings) {
    const number = parseInt(numAsString);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
