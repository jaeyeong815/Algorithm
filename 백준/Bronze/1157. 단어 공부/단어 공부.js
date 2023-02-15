const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')[0].split('');

let obj = {};
let count = 0;
let num;

input.forEach((str) => {
  obj[str.toLocaleLowerCase()]
    ? (obj[str.toLocaleLowerCase()] += 1)
    : (obj[str.toLocaleLowerCase()] = 1);
});

let max = Math.max(...Object.values(obj));

for (let [key, value] of Object.entries(obj)) {
  if (value === max) {
    count++;
    num = key;
  }
}

console.log(count > 1 ? '?' : num.toLocaleUpperCase());