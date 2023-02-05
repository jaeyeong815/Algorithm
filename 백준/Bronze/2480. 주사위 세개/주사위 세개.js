const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0]
  .split(' ')
  .map((el) => +el)
  .sort((a, b) => a - b);

solution(input[0], input[1], input[2]);

function solution(a, b, c) {
  if (a === b && b === c) {
    console.log(10000 + a * 1000);
  } else if (a === b || b === c) {
    console.log(1000 + b * 100);
  } else {
    console.log(Math.max(a, b, c) * 100);
  }
}
