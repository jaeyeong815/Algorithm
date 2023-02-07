function solution(s) {
    return s.split(' ').reduce(
  (acc, cur, idx, src) =>
    cur === "Z" ? (acc -= Number(src[idx - 1])) : (acc += Number(cur)),
  0)
}