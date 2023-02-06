const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(number) {
  for (let i = 1; i < 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}
