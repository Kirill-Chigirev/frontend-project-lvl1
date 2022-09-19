import readlineSync from 'readline-sync';
import { getRandomInRange, getRandomArrayElement } from '../index.js';

export default () => {
  const operations = ['+', '-', '*'];

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const randomOperator = getRandomArrayElement(operations);
    const firstNum = getRandomInRange(0, 29);
    const secondNum = getRandomInRange(0, 29);
    const randomExp = `${firstNum} ${randomOperator} ${secondNum}`;
    console.log(`Question: ${randomExp}`);
    const answer = readlineSync.question('Your answer: ');
    const getRightAnswer = (a, b, op) => {
      let result;
      if (op === '+') {
        result = a + b;
      } else if (op === '*') {
        result = a * b;
      } else {
        result = a - b;
      }

      return result;
    };
    const rightAnswer = getRightAnswer(firstNum, secondNum, randomOperator);
    if (rightAnswer === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
