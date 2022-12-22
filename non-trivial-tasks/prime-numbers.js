/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes */

function sumPrimes(num) {
  const range = getPrimes(num);
  const sum = range.reduce((acc, item) => {
    return acc += item
  }, 0);
  return sum;
}

const getPrimes = (number) => {
  const primes = [];
  for (let i = 2; i <= number; i++) {
    if (checkIfPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

const checkIfPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
};

console.log(sumPrimes(977))