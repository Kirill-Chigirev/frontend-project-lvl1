import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';

const getRandomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const even = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // eslint-disable-next-line no-restricted-syntax
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInRange(1, 99);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      // eslint-disable-next-line no-shadow
      const rightAnswer = (randomNum) => {
        if (randomNum % 2 === 0) {
          return 'yes';
        // eslint-disable-next-line no-else-return
        } else {
          return 'no';
        }
      };
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer()}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export const calc = () => {
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

// eslint-disable-next-line consistent-return
export const gcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const pair = cons(getRandomInRange(1, 99), getRandomInRange(1, 99));
    console.log(`Question: ${car(pair)} ${cdr(pair)}`);
    const answer = readlineSync.question('Your answer: ');
    const getLowerValue = () => ((car(pair) <= cdr(pair)) ? car(pair) : cdr(pair));
    const getMoreValue = () => ((car(pair) >= cdr(pair)) ? car(pair) : cdr(pair));
    const getGCD = () => {
      // eslint-disable-next-line prefer-const
      let index = getLowerValue();

      while (index > 0) {
        if (getLowerValue() % index === 0 && getMoreValue() % index === 0) {
          return index;
        }
        index -= 1;
      }

      return index;
    };

    if (getGCD() === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getGCD()}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
