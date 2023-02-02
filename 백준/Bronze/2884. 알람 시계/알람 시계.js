const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((el) => +el);

solution(input[0], input[1]);

function solution(H, M) {
  if (M - 45 < 0) {
    console.log(H - 1 === -1 ? 23 : H - 1, 60 + (M - 45));
  } else {
    console.log(H, M - 45);
  }
}