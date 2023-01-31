const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((el) => el.split(' ').map((el) => +el)).flat();

solution(input);

function solution(numArr) {
  const [a, b] = numArr;

  if (a > b) console.log('>');
  if (a < b) console.log('<');
  if (a === b) console.log('==');
}