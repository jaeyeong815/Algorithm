const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((el) => +el);

console.log(Math.max(...input));
console.log(input.indexOf(Math.max(...input)) + 1);