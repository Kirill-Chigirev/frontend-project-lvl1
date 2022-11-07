import run from '../index.js';
import getRandomInRange from '../utilites.js';

const rules = 'What number is missing in the progression?';
const minStep = 2;
const maxStep = 10;
const minNumber = 1;
const maxNumber = 99;

const getProgression = () => {
  const firstNumber = getRandomInRange(minNumber, maxNumber);
  const step = getRandomInRange(minStep, maxStep);
  const numbers = [firstNumber];

  for (let i = 0; numbers.length <= 9; i += 1) {
    numbers.push(numbers[i] + step);
  }

  return numbers;
};

const getGameRound = () => {
  const progression = getProgression();
  const randomIndex = Math.floor(Math.random() * progression.length);
  const randomElement = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  const answer = String(randomElement);

  return [question, answer];
};

export default () => {
  run(rules, getGameRound);
};
