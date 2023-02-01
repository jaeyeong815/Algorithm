function solution(before, after) {
    const beforeObj = {};
    let answer;
    
    before.split('').forEach(el => beforeObj[el] ? beforeObj[el] += 1 : beforeObj[el] = 1);
    for (const el of after) {
        if (beforeObj[el]) {
            beforeObj[el] -= 1
            answer = 1;
        } else {
            answer = 0
            break;
        }
    }
    
    return answer;
}