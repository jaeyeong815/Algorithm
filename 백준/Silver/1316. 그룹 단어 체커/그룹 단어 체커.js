const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const answer = [];

for (let i = 1; i < +input[0] + 1; i++) {
  const arr = [];

  for (let j = 0; j < input[i].length; j++) {
    if (!input[i][j + 1]) {
      arr.includes(input[i][j]) ? null : answer.push('o');
      break;
    }
    if (input[i][j] === input[i][j + 1]) continue;
    if (arr.includes(input[i][j])) break;
    arr.push(input[i][j]);
  }
}

console.log(answer.length);
