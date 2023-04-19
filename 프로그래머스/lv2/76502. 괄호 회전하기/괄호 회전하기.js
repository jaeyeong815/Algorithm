const obj = { '(': ')', '[': ']', '{': '}' }
function solution(s) {
    if (s.length % 2 !== 0) return 0;
    let answer = 0;
    let x = 0;
    while (x < s.length) {
        const bracket = s.slice(x) + s.slice(0,x);
        const queue = [];
        queue.push(bracket[0]);
        for (let i=1; i<bracket.length; i++) {
            if (queue.length === 0) {
                queue.push(bracket[i])
                continue;
            }
            if (obj[queue[queue.length-1]] === bracket[i]) queue.pop();
            else queue.push(bracket[i]);
        }
        if (queue.length === 0) answer++;
        x++;
    }
    return answer;
}