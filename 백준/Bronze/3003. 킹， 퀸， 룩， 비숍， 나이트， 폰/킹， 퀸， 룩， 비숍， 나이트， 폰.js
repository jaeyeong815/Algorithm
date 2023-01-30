const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((el) => +el);
solution(input);

function solution(white) {
  const chess = [1, 1, 2, 2, 2, 8];
  const answer = [];
  for (let i = 0; i < white.length; i++) {
    if (white[i] === chess[i]) answer.push(0);
    if (white[i] > chess[i]) answer.push(-(white[i] - chess[i]));
    if (white[i] < chess[i]) answer.push(chess[i] - white[i]);
  }
  console.log(answer.join(' '));
}