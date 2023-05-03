

//4. Fibonacci

//For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

//0 1 1 2 3 5 8 13 21...


//Pseudocode

//1. Loop to generate the Fibonacci sequence until the value of 'a' exceeds 1,000,000.
//2.  Checks if the value of 'a' is even (i.e., divisible by 2), and if it is, it adds it to the sum.


let sum = 0;
let a = 0;
let b = 1;
let temp;

while (a < 1000000) {
  if (a % 2 === 0) {
    sum += a;
  }
  temp = a + b;
  a = b;
  b = temp;
}

console.log(sum);

