import run from '../index.js';
import getRandomInRange from '../utilites.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 99;

const isEven = (num) => num % 2 === 0;

const getGameRound = () => {
  const question = getRandomInRange(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  run(rules, getGameRound);
};
