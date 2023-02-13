const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= +input[0]; i++) {
  let answer = 0;
  let point = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      point++;
    } else point = 0;
    answer += point;
  }
  console.log(answer);
}
