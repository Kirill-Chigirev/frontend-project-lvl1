import run from '../index.js';
import getRandomInRange from '../utilites.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 2;
const maxNumber = 101;

const isPrimeNumber = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameRound = () => {
  const question = getRandomInRange(minNumber, maxNumber);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  run(rules, getGameRound);
};
