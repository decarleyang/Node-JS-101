// process.stdout.write("Hello ");
// process.stdout.write("World \n\n\n");

const questions = [
  "What is your name?",
  "What world you rather be doing?",
  "What is your preferred programming language?"
];

const ask = (i = 0) => {
  process.stdout.write(`\n ${questions[i]}`);
  process.stdout.write(` > `);
};

ask();

const answers = [];

process.stdin.on("data", data => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  const [name, activity, lang] = answers;
  console.log(`
    Thank you for your anwsers.
    Go ${activity} ${name}, you can write ${lang} later!
    `);
});
