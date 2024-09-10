import getRandomNumber from '../utilities.js';
import getRoundsCount from '../getRoundsCount.js';

const getGameRules = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  const getRound = () => {
    const primeNumbers = [2, 5, 3, 7, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];

    const task = getRandomNumber(71);
    const rightAnswer = ((primeNumbers.includes(task)) ? 'yes' : 'no');

    return [task, rightAnswer];
  };

  return [question, getRound];
};

export default () => getRoundsCount(getGameRules);
