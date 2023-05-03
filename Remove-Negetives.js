

//5. Remove the Negative

//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].



//Pseudocode

//1. Creates a new array containing all elements of the original array X that meet a certain condition.

const X = [1, -2, 4, 1];
const result = X.filter(num => num >= 0);

console.log(result); //Output = [1, 4, 1]


