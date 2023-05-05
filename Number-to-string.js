
//8. Number to String

//Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].

//Pseudocode

//1.Loop through each element in the array 
//2. 'If statement' to check if the current element is less than zero.

let X = [1,-4,0,-1];

for (let i = 0; i < X.length; i++) {
  if (X[i] < 0) {
    X[i] = 'Turing';
  }
}

console.log(X); // Output: [1, 'Turing', 0, 'Turing']
