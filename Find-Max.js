//5. Find Max

/*Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.*/

//Pseudocode

//1. We first initialize an array X with some values.
//2. Loop to iterate over all the elements in the array except for the first one, since we have already initialized max to the first element.
//3. 'If statement' we update max to the current element if it is greater than one.


let X = [1, -4, 0, 6, -2, 8, 0, 10];
let max = X[0];

for (let i = 1; i < X.length; i++) {
  if (X[i] > max) {
    max = X[i];
  }
}

console.log(max); // Output: 10
