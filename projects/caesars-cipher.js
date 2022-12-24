const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const shift = (arr, rot) => {
  return arr.map((item, index) => {
    let shiftValue = index - rot
    shiftValue = (shiftValue < 0) ? arr.length + shiftValue : shiftValue;
    return {[item]: arr[shiftValue]};
  })
};

function rot13(str) {
  const rot = 13;
  const cipherKey = shift(ALPHABET, rot);
  
  let newStr = str
    .split(' ')
    .map((word) => {
      word = word
        .split('')
        .map((char) => {
          char = (/[A-Z]/.test(char)) ? cipherKey.find(item => item[char])[char] : char;
          return char;
        })
        .join('');
      return word;
    })
    .join(' ');
  console.log(newStr)
  return newStr;
}

rot13("SERR CVMMN!");