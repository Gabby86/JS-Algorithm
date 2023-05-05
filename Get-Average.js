//6. Get Average

//Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

//Pseudocode

//1. loop to iterate over all the elements in the array and add them.
//2. Calculate the average value by dividing sum by the length of the array X

let X = [1, 2, 3, 4];

let sum = 0;

for (let i = 0; i < X.length; i++) {
  sum += X[i];
}

let avg = sum / X.length;

console.log(avg); // Output: 2
