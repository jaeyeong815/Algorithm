const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i < +input[0] + 1; i++) {
  const arr = input[i].split(' ').map((el) => +el);
  const [N, ...score] = arr;
  const average = score.reduce((cal, cur) => cal + cur, 0) / N;
  const nums = score.filter((num) => num > average).length;
  console.log(((nums / N) * 100).toFixed(3) + '%');
}