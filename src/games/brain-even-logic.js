import readlineSync from 'readline-sync';
import getRandomNumber from '../utilities.js';
import greeting from '../cli.js';

export default () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let round = 0;

  while (round < 3) {
    const randomNumber = getRandomNumber(99);
    const getRightAnswer = () => ((randomNumber % 2 === 0) ? 'yes' : 'no');
    const rightAnswer = getRightAnswer();

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');

    round += 1;
  }

  console.log(`Congratulations, ${name}!`);
};
