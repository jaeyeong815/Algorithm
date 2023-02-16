function solution(score) {
    const grade = {};
    
    score.map(([a,b])=> (a+b)/2).sort((a,b) => b-a).forEach((el, idx) => grade[el] ? null : grade[el] = idx+1);
    
    return score.map(([a,b]) => grade[(a+b)/2])
}