// Write your code below


var x = 32;
var result;



if (x%3 === 0 && x%5 === 0) {
  result = "fizzbuzz";
} else if (x%3 === 0) {
  result = "fizz";
} else if (x%5 === 0) {
  result = "buzz";
} else {
  result = x;
}