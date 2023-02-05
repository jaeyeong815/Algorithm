const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((el) => el.split(' ').map((el) => +el));

solution(input[0], input[1][0]);

function solution(current, timer) {
  const [H, M] = current;

  let hour = H;
  let minute = timer + M;

  while (minute >= 60) {
    hour++;
    minute -= 60;
  }

  if (hour >= 24) {
    hour -= 24;
  }

  console.log(hour, minute);
}