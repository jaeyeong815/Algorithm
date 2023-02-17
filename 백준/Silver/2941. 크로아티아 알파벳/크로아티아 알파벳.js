const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')[0];

const cro = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
cro.forEach((str) => (input.includes(str) ? (input = input.replaceAll(str, 'a')) : null));
console.log(input.length);