import readlineSync from 'readline-sync';
import greeting from './cli.js';

const getRoundsCount = (gameRules) => {
  const [question, getRound] = gameRules();
  const name = greeting();
  console.log(question);

  let roundNumber = 0;

  while (roundNumber < 3) {
    const [task, rightAnswer] = getRound();

    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ');

    if (String(answer) !== String(rightAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');

    roundNumber += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default getRoundsCount;
