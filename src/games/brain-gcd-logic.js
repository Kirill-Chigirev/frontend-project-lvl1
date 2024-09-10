import getRandomNumber from '../utilities.js';
import getRoundsCount from '../getRoundsCount.js';

const getGameRules = () => {
  const question = 'Find the greatest common divisor of given numbers.';

  const getRound = () => {
    const firstNum = getRandomNumber(100);
    const secondNum = getRandomNumber(100);
    const task = `${firstNum} ${secondNum}`;
    const smallerNumber = (firstNum < secondNum) ? firstNum : secondNum;

    let rightAnswer = 1;

    for (let i = smallerNumber; i > 1; i -= 1) {
      if (firstNum % i === 0 && secondNum % i === 0) {
        rightAnswer = i;
        break;
      }
    }

    return [task, rightAnswer];
  };

  return [question, getRound];
};

export default () => getRoundsCount(getGameRules);
