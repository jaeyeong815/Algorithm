function solution(k, m, score) {
    const a = [];
    let b = 0;
    score.sort((a,b) => b-a)
    for(let i=0; i<score.length; i+=m) {
        a.push(score.slice(i,i+m));
    }
    for(let el of a) {
        if(el.length < m) break;
        b += el[m-1] * m;
    }
    return b
}