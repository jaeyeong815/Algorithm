function solution(i, j, k) {
  let answer = 0;
  while (i <= j) {
    if (i.toString().includes(k)) {
      i.toString()
        .split('')
        .map((el) => (el.includes(k) ? (answer += 1) : ''));
    }
    i++;
  }
  return answer;
}