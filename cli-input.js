const readline = require('readline-sync');

const textQuestion = (question, answer) => {
  const userAns = readline.question(question + "\n>");
  return answer.toLowerCase() === userAns.toLowerCase();
}

const listQuestion = (options, question, answerIndex) => {
  const userAns = readline.keyInSelect(options, question);
  return userAns === answerIndex;
}

//answer in boolean
const binaryQuestion = (question, answer) => {
  const userAns = readline.keyInYN(question);
  return userAns === answer;
}

module.exports = {textQuestion, listQuestion, binaryQuestion};