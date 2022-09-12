#!/usr/bin/env node

import readlineSync from 'readline-sync';

const calc = () => {
  const operations = ['+', '-', '*'];
  const getRandomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const randExp = () => `${getRandomInRange(0, 29)} ${getRandomArrayElement(operations)} ${getRandomInRange(0, 29)}`;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const expression = randExp();
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (expression === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expression}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

calc();
