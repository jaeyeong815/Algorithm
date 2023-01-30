function solution(order) {
    return Array.from(String(order)).filter(el => [3,6,9].includes(Number(el))).length
}