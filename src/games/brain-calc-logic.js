import getRandomNumber from '../utilities.js';
import getRoundsCount from '../getRoundsCount.js';

const getGameRules = () => {
  const question = 'What is the result of the expression?';

  const getRound = () => {
    const operators = ['+', '-', '*'];
    const firstNum = getRandomNumber(15);
    const secondNum = getRandomNumber(15);
    const randomIndex = Math.floor(Math.random() * (operators.length));
    const randomOperator = operators[randomIndex];
    const task = `${firstNum} ${randomOperator} ${secondNum}`;
    let rightAnswer = firstNum + secondNum;

    if (randomOperator === '-') {
      rightAnswer = firstNum - secondNum;
    }

    if (randomOperator === '*') {
      rightAnswer = firstNum * secondNum;
    }

    return [task, rightAnswer];
  };

  return [question, getRound];
};

export default () => getRoundsCount(getGameRules);
