import run from '../index.js';
import getRandomInRange from '../utilites.js';

const rules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const minNumber = 0;
const maxNumber = 29;
const getRandomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getExpression = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'Good game';
  }
};

const getGameRound = () => {
  const firstNumber = getRandomInRange(minNumber, maxNumber);
  const secondNumber = getRandomInRange(minNumber, maxNumber);
  const operator = getRandomArrayElement(operations);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = String(getExpression(firstNumber, secondNumber, operator));
  return [question, answer];
};

export default () => {
  run(rules, getGameRound);
};
