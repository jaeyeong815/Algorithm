const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0].split('').map((el) => +el));

function solution(input) {
  let num1, num2, originNum, newNum;
  let answer = 0;
  if (input.length === 1) {
    num1 = 0;
    num2 = input[0];
    originNum = Number(input[0]);
  } else {
    num1 = input[0];
    num2 = input[1];
    originNum = Number(input.join(''));
  }

  while (originNum !== +newNum) {
    let cal = num1 + num2;
    if (cal.toString().length > 1) {
      cal = +cal.toString().slice(-1);
    }
    newNum = String(num2) + String(cal);
    num1 = num2;
    num2 = cal;
    answer++;
  }
  console.log(answer);
}