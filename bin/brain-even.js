#!/usr/bin/env node

import readlineSync from 'readline-sync';

const questions = () => {
  const numbers = [15, 6, 7];

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // eslint-disable-next-line no-restricted-syntax
  for (const num of numbers) {
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      // eslint-disable-next-line no-shadow
      const oppositeMean = (num) => {
        if (num % 2 === 0) {
          return 'yes';
        // eslint-disable-next-line no-else-return
        } else {
          return 'no';
        }
      };
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${oppositeMean()}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

questions();
