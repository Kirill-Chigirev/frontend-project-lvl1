import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { getRandomInRange, getRandomArrayElement } from '../src/index.js';

export default () => {
  const operations = ['+', '-', '*'];

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const randomOperator = getRandomArrayElement(operations);
    const pair = cons(getRandomInRange(0, 29), getRandomInRange(0, 29));
    const randExp = `${car(pair)} ${randomOperator} ${cdr(pair)}`;
    console.log(`Question: ${randExp}`);
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
    const rightAnswer = getRightAnswer(car(pair), cdr(pair), randomOperator);
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
