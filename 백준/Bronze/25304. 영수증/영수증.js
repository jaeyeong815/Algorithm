const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const [total, _, ...list] = input;

  const calculation = list
    .map((el) => el.split(' '))
    .reduce((acc, cur) => acc + Number(cur[0]) * Number(cur[1]), 0);

  console.log(+total === calculation ? 'Yes' : 'No');
  process.exit();
});