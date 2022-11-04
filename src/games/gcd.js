import run from '../index.js';
import getRandomInRange from '../utilites.js';

const rules = 'Find the greatest common divisor of given numbers.';
const minNumber = 2;
const maxNumber = 99;

const getGCD = (x, y) => {
  for (let i = Math.min(x, y); i >= 1; i -= 1) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }

  return x;
};

const gameRound = () => {
  const firstNumber = getRandomInRange(minNumber, maxNumber);
  const secondNumber = getRandomInRange(minNumber, maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(getGCD(firstNumber, secondNumber));
  return [question, answer];
};

export default () => {
  run(rules, gameRound);
};
