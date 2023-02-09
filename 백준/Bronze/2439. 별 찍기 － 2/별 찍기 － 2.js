const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(parseInt(line));
}).on('close', () => {
  for (let i = 1; i <= input[0]; i++) {
    console.log('*'.repeat(i).padStart(input[0], ' '));
  }
  process.exit();
});