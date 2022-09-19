import readlineSync from 'readline-sync';
import { getRandomInRange } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomInRange(1, 99);
    const secondNum = getRandomInRange(1, 99);
    console.log(`Question: ${firstNum} ${secondNum}`);
    const answer = readlineSync.question('Your answer: ');
    const getLowerValue = () => ((firstNum <= secondNum) ? firstNum : secondNum);
    const getMoreValue = () => ((firstNum >= secondNum) ? firstNum : secondNum);
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
