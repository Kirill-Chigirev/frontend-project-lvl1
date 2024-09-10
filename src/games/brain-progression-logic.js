import getRandomNumber from '../utilities.js';
import getRoundsCount from '../getRoundsCount.js';

const getGameRules = () => {
  const question = 'What number is missing in the progression?';

  const getRound = () => {
    const firstNum = getRandomNumber(150);
    const step = getRandomNumber(10) || 1;
    const index = getRandomNumber(9);
    const numbers = [];

    for (let i = firstNum; numbers.length < 10; i += step) {
      numbers.push(i);
    }

    const rightAnswer = numbers[index];
    numbers[index] = '..';

    const task = numbers.join(' ');

    return [task, rightAnswer];
  };

  return [question, getRound];
};

export default () => getRoundsCount(getGameRules);
