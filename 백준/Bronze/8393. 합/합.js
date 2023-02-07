const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(parseInt(line));
}).on('close', () => {
  let answer = 0;
  for (let i = input[0]; i > 0; i--) {
    answer += i;
  }
  console.log(answer);
  process.exit();
});