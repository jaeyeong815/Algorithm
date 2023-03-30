function solution(s) {
    const t = s.split(' ').map(el => parseFloat(el));
    return `${Math.min(...t)} ${Math.max(...t)}`
}