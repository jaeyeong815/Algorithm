const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((el) => el.split(' '));

console.log(input[1].filter((el) => +el < +input[0][1]).join(' '));
