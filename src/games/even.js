import readlineSync from 'readline-sync';
import { getRandomInRange } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInRange(1, 99);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      const getRightAnswer = () => (randomNum % 2 !== 0 ? 'no' : 'yes');
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getRightAnswer()}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
