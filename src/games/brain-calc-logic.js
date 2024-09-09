import readlineSync from 'readline-sync';
import getRandomNumber from '../utilities.js';
import greeting from '../cli.js';

export default () => {
  const name = greeting();
  console.log('What is the result of the expression?');

  const operators = ['+', '-', '*'];

  let round = 0;

  while (round < 3) {
    const getRightAnswer = () => {
      const firstNum = getRandomNumber(15);
      const secondNum = getRandomNumber(15);
      const randomIndex = Math.floor(Math.random() * (operators.length));
      const randomOperator = operators[randomIndex];
      const question = `${firstNum} ${randomOperator} ${secondNum}`;
      let rightAnswer = firstNum + secondNum;

      if (randomOperator === '-') {
        rightAnswer = firstNum - secondNum;
      }

      if (randomOperator === '*') {
        rightAnswer = firstNum * secondNum;
      }

      return [question, rightAnswer];
    };

    const rules = getRightAnswer();
    const [question, rightAnswer] = rules;

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (+answer !== +rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');

    round += 1;
  }

  console.log(`Congratulations, ${name}!`);
};
