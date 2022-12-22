/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker */

function palindrome(str) {
  let result = true;

  const arr = str
    .toLowerCase()
    .split('')
    .filter((char) => /[a-z0-9]/.test(char));

  const length = arr.length

  for (let i = 0; i <= Math.floor(length / 2); i++) {
    if (arr[i] !== arr[length - i - 1]) {
      return result = false;
    }
  }

  return result;
}

palindrome("My age is 0, 0 si ega ym."); // → true