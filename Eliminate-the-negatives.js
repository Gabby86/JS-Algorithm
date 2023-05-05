//7. Eliminate the Negatives

//Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

//Pseudocode


//1. loop through each element in the array X using a for loop.
//2.'if statement'. If it is, we replace the element with 0.

let X = [1,-4,0,-1];

for (let i = 0; i < X.length; i++) {
  if (X[i] < 0) {
    X[i] = 0;
  }
}

console.log(X); // Output: [1, 0, 0, 0]