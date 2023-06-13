function solution(N, stages) {
    let total = stages.length;
    const failure = {};
    
    for(let i = 1; i <= N; i++) {
        const users = stages.filter(stage => stage === i);
        if (users.length === 0) {
            failure[i] = 0;
        } else {
            failure[i] = users.length / total;
        }
        total -= users.length;
    }
    
    return Object.entries(failure).sort((a,b) => b[1] - a[1]).map(el => +el[0])
}