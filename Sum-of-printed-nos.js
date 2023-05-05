/*Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

Number is: 0 Sum: 0

Number is: 1 Sum: 1

Number is: 2 Sum: 3

Number is: 3 Sum: 6*/

//Pseudocode

//1. loop to iterate over all the numbers from 1 to 135. 
//2. 


let sum = 0;

for (let i = 1; i <= 135; i++) {
  console.log(i);
  sum += i;
  console.log("Sum so far: " + sum);
}


/*1
Sum so far: 1
2
Sum so far: 3
3
Sum so far: 6
4
Sum so far: 10
5
Sum so far: 15
6
.....
134
Sum so far: 9045
135
Sum so far: 9180*/

