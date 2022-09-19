import readlineSync from 'readline-sync';
import { getRandomInRange } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const step = getRandomInRange(2, 10);
    const numbers = [getRandomInRange(1, 99)];

    for (let ind = 0; numbers.length <= 10; ind += 1) {
      numbers.push(numbers[ind] + step);
    }
    const randomArrIndex = Math.floor(Math.random() * numbers.length);
    const randomIndex = randomArrIndex;
    const randomElementValue = numbers[randomIndex];
    numbers[randomIndex] = '..';
    console.log(`Question: ${numbers.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === randomElementValue) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${randomElementValue}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
