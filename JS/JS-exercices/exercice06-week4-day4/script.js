// Is the Number Less than or Equal to Zero?

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqual(input) {
  let number = input;
  if (number <= 0) {
    return ("TRUE !");
  }
  else {
    return ("FALSE !");
  } 
};
// console.log(lessThanOrEqual(-1));

// Is the Number Even or Odd?
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function evenOrOdd (input) {
  let number2 = input;
  if (number2 % 2 == 0) {
    return ("even");
  }
  else {
    return ("odd");
  };
};
// console.log(evenOrOdd(4));

// Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

function isPlural(input) {
  let lastLetter = input.substr(-1, 1);
  if (lastLetter == "s") {
    return (true);
  }
  else {
    return (false)
  };
};
console.log(isPlural("virus"));

