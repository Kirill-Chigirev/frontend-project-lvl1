import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { getRandomInRange } from '../src/index.js';

export default () => {
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
