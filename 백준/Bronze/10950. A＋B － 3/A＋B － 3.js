const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((el) => el.split(' ').map((el) => +el));

solution(input);

function solution(arr) {
  for (let [a, b] of arr) {
    if (!a || !b) continue;
    console.log(a + b);
  }
}