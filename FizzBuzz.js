//Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]

//Pseudocode

//1.  Loop to iterate through the numbers 1 to 135.
//2. For each number, it checks if it is divisible by 3, by 5, or by both.
//3. If it is divisible by both 3 and 5, it adds the string "FizzBuzz" to the arr using the push().
//4. If it is only divisible by 3, it adds the string "Fizz" to `arr

let arr = [];

for (let i = 1; i <= 135; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    arr.push("FizzBuzz");
  } else if (i % 3 === 0) {
    arr.push("Fizz");
  } else if (i % 5 === 0) {
    arr.push("Buzz");
  } else {
    arr.push(i);
  }
}

console.log(arr); //Output = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz", 106, 107, "Fizz", 109, "Buzz", "Fizz", 112, 113, "Fizz", "Buzz", 116, "Fizz", 118, 119, "FizzBuzz", 121, 122, "Fizz", 124, "Buzz", "Fizz", 127, 128, "Fizz", "Buzz", 131, "Fizz", 133, 134, "FizzBuzz"]

