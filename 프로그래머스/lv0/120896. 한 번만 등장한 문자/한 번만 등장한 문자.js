function solution(s) {
    let obj = {}
    let answer = [];
    s.split('').map(str => obj[str] ? obj[str] += 1 : obj[str] = 1)
    for (const [key, value] of Object.entries(obj)) {
        value === 1 ? answer.push(key) : ''
    }
    return answer.sort().join('')
}