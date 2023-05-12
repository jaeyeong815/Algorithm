function solution(babbling) {
  const string = ['aya', 'ye', 'woo', 'ma'];
  let answer = 0;

  for (let el of babbling) {
    let target = el;
    string.forEach((str, idx) => (target = target.replaceAll(str, idx)));

    let isCorrected = true;
    for (let j = 0; j < target.length; j++) {
      if (isNaN(+target[j]) || target[j] === target[j + 1]) {
        isCorrected = false;
        break;
      }
    }

    if (isCorrected) answer++;
  }

  return answer;
}