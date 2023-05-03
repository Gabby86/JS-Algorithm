//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

//Pseudocode

//1. Loop to iterate over all the numbers between 200 and 2700 (inclusive).
//2. 'If Statement' to check if the current number is divisible by 3 or 5, but not both. 
//3. To do this, we use the modulus operator (%) to check if the remainder after dividing the number by 3 or 5 is equal to 0


let sum = 0;
for (let i = 200; i <= 2700; i++) {
  if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
    sum += i;
  }
}
console.log(sum);
