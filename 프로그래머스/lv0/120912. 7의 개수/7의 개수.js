function solution(array) {
  return array
    .map(
      (el) =>
        el
          .toString()
          .split('')
          .filter((el) => el.includes('7')).length
    )
    .reduce((cal, cur) => cal + cur, 0);
}