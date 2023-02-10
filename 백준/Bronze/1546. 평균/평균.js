const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = +input[0];
input = input[1].split(' ').map((el) => +el);
let max = Math.max(...input);
let scores = [];

for (const score of input) {
  scores.push((score / max) * 100);
}

let average = scores.reduce((cal, cur) => cal + cur, 0) / num;
console.log(average);
