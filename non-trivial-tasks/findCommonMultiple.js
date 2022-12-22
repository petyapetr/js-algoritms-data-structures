/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple */

// TODO needs to be revisited (https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-smallest-common-multiple/16075)

function smallestCommons(arr) {
  const sortArr = (arr) => {
    return arr.sort((a, b) => a - b)
  };
  const fillArr = (arr) => {
    let filledArr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
      filledArr.push(i);
    }
    return filledArr
  };
  const divisionCheck = (num, arr) => {
    for (let divider of arr) {
      if (num % divider !== 0) {
        return false;
      }
    }
    return true;
  };
  const findCommonMultiple = (arr) => {
    for (let i = arr[0]; ; i++) {
      if (divisionCheck(i, arr)) {
        return i
      }
    }
  };

  const result = findCommonMultiple(fillArr(sortArr(arr)))
  return result;
}

console.log(smallestCommons([1,5])); // → 60
smallestCommons([5, 1]); // → 60
smallestCommons([2, 10]); // → 2520
smallestCommons([1, 13]); // → 360360
smallestCommons([23, 18]); // → 6056820