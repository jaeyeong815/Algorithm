const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')[0];

let result = [];

for (let i = 1; i < +input; i++) {
  result.push(' '.repeat(+input - i), '*'.repeat(2 * i - 1));
  result.push('\n');
}

for (let i = +input; i > 0; i--) {
  result.push(' '.repeat(+input - i), '*'.repeat(2 * i - 1));
  result.push('\n');
}

console.log(result.join(''));