const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((el) => el.split(' ').map((el) => +el)).flat();

solution(input);

function solution(numArr) {
  const [first, second] = numArr;
  const answer = second
    .toString()
    .split('')
    .reverse()
    .map((el) => +el * first);
  answer.push(first * second);

  answer.forEach((el) => console.log(el));
}