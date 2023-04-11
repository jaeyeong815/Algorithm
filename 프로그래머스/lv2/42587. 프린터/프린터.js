function solution(priorities, location) {
    let max;
    let answer = 0;
    
    while(true) {
        max = Math.max(...priorities);
        let current = priorities.shift();
        
        if (current === max) {
            answer += 1;
            if (location === 0) {
                return answer;
            }
        }
        else {
            priorities.push(current);
        }
        
        location -= 1;
        if (location === -1) location = priorities.length - 1;
    }
    
    return answer;
}