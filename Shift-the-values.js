//2. Shift the Values

//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

//Pseudocode

//1. Initialize the array x with the values [2, 1, 6, 4, -7]
//2.  Loop iterates over the array starting from the second-to-last element.

let x = [2, 1, 6, 4, -7];
let last = x[x.length - 1];

for (let i = x.length - 2; i >= 0; i--) {
  x[i + 1] = x[i];
}

x[0] = last;

console.log(x); //Output = [-7, 2, 1, 6, 4]

