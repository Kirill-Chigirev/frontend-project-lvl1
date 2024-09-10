import getRandomNumber from '../utilities.js';
import getRoundsCount from '../getRoundsCount.js';

const getGameRules = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no"';

  const getRound = () => {
    const task = getRandomNumber(100);
    const rightAnswer = ((task % 2 === 0) ? 'yes' : 'no');

    return [task, rightAnswer];
  };

  return [question, getRound];
};

export default () => getRoundsCount(getGameRules);
