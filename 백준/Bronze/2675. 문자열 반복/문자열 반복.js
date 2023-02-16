const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= +input[0]; i++) {
  const [R, S] = input[i].split(' ');
  console.log(
    S.split('')
      .map((el) => el.repeat(+R))
      .join('')
  );
}