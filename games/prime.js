import readlineSync from 'readline-sync';
import { getRandomInRange } from '../src/index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInRange(2, 101);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    const isPrimeNumber = (num) => {
      let divider = 2;

      while (divider <= num / 2) {
        if (num % divider === 0) {
          return false;
        }

        divider += 1;
      }

      return true;
    };

    if ((isPrimeNumber(randomNum) === true && answer === 'yes') || (isPrimeNumber(randomNum) === false && answer === 'no')) {
      console.log('Correct!');
    } else {
      const rightAnswer = (func) => (func === false ? 'no' : 'yes');
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer(isPrimeNumber(randomNum))}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
