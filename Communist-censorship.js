

//6. Communist Censorship

//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice.


//Pseudocode

//1. write word to be replaced with stars, and an array of strings.
//2. create a new word by replacing every letter in the input word with a star, using the replace() method and a regular expression (/./g matches any character in the word
//3. create a new array, where each string in the original array that contains the input word is replaced with the new word


let X = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];

function replaceWordWithStars(word, arr) {
  const newWord = word.replace(/./g, '*'); // replaces every letter with Stars
  const newArr = arr.map(str => str.replace(word, newWord));
  return newArr;
}

// Usage example:
X = replaceWordWithStars('Program', X);
console.log(X); //[ 'Man', 'I', 'Love', 'The', 'Matrix', '*******' ]

