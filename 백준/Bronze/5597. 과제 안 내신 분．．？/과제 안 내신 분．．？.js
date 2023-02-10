const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((el) => +el).sort((a, b) => a - b);

let num = [];

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) num.push(i);
  if (num.length === 2) break;
}

console.log(num[0]);
console.log(num[1]);
