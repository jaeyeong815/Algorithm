function solution(s, n) {
  let answer = '';

  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  s.split('').forEach((el) => {
    if (el === ' ') return (answer += ' ');
    let index;

    if (lower.indexOf(el) !== -1) {
      index = lower.indexOf(el) + n > 25 ? lower.indexOf(el) + n - 26 : lower.indexOf(el) + n;
      return (answer += lower[index]);
    }
    index = upper.indexOf(el) + n > 25 ? upper.indexOf(el) + n - 26 : upper.indexOf(el) + n;
    answer += upper[index];
  });
    
  return answer;
}