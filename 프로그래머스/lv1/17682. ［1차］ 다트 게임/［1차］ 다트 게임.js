function solution(dartResult) {
    let answer = [];
    const scores = dartResult.match(/\d+[SDT](\*|#)?/g);
    for(let score of scores) {
        const num = score.match(/\d+/g)[0];
        const n = score.match(/[S,D,T]/g)[0] === 'D' ? 2 : score.match(/[S,D,T]/g)[0] === 'T' ? 3 : 1;
        let s = 1;
        if (score[2] === '*') {
            s = 2;
            if (answer[scores.indexOf(score) - 1]) {
                answer[scores.indexOf(score) - 1] *= 2
            }
        }
        else if (score[2] === '#') {
            s = -1;
        }
        answer.push((parseInt(num) ** n) * s)
    }
    return answer.reduce((cal, cur) => cal + cur,0)
}