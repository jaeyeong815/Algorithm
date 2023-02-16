const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')[0];
console.log(input.split(' ').filter((el) => el.length !== 0).length);
