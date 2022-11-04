/** quiz app in node js */

const prompt = require("prompt-sync")();

const questions = [
  {
    question: "Who is the prime minister of Pakistan?",
    answer: "shahbaz shareef",
    options: [
      "Shahbaz Shareef",
      "Imran Khan",
      "Nawaz Shareef",
      "Javed Miandad",
    ],
    score: 5,
  },
  {
    question: "Who is the finance minister of Pakistan?",
    answer: "ishaq dar",
    options: ["Shahbaz Shareef", "Imran Khan", "Ishaq Dar", "Javed Miandad"],
    score: 5,
  },
  {
    question: "Who is the captain of Pakistan Cricket Team?",
    answer: "babar azam",
    options: ["Shahid Afridi", "Babar Azam", "Javed Latif", "Waseem Akram"],
    score: 5,
  },
];

let answers = [];
let totalScore = 0;
let obtainedScore = 0;

questions.forEach((question) => {
  console.log(question.question);

  question.options.forEach((option) => {
    console.log(option, "\n");
  });

  let answer = prompt(question.question);

  answers.push(answer);

  totalScore += question.score;

  if (answer.toLocaleLowerCase() === question.answer) {
    totalScore += question.score;
  }
});

answers.forEach((answer, key) => {
  console.log(`Your answer to question ${key + 1} is ${answer}`);
});

console.log(
  `Your obtained score is: ${obtainedScore} out of total: ${totalScore}`
);
