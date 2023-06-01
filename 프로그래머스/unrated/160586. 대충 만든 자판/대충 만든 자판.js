function solution(keymap, targets) {
    const obj = {};
    let answer = [];
    
    for (keys of keymap) {
        keys.split('').forEach((key, i) => {
            obj[key] ? obj[key] = Math.min(obj[key], i+1) : obj[key] = i+1
        })
    }
    
    for (target of targets) {
        let result = 0;
        for (i of target) {
            result += obj[i]
        }
        if (!result) answer.push(-1)
        else answer.push(result)
    }
    
    return answer
}