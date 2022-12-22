/* Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
*/

function fearNotLetter(str) {
  let arr = str
    .split('')
    .map((x) => x.charCodeAt(0))
    .reduce((acc, char, index, lst) => {
      if (index < lst.length - 1 && ++char !== lst[++index]) {
        const missingChar = String.fromCharCode(char++);
        acc.push(missingChar);
      }
      return acc;
    }, []);

  let result = arr.length === 0 ? undefined : arr[0];
  console.log(result)
  return result
}

fearNotLetter("abce"); // → d
fearNotLetter("abcdefghjklmno"); // → i
fearNotLetter("bcdf") // → e
fearNotLetter("abcdefghijklmnopqrstuvwxyz"); // → undefined