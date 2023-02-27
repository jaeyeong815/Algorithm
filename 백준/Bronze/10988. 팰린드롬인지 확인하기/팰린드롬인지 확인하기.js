const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')[0];

let answer = 1;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== input[input.length - 1 - i]) {
    answer = 0;
    break;
  }
}

console.log(answer);