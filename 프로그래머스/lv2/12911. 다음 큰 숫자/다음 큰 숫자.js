function gettingTheNumberOfOne(n) {
    return n.toString(2).split('').filter(el => el === '1').length;
}

function solution(n) {
    let answer = n;
    const one = gettingTheNumberOfOne(n);
    while(true) {
        answer += 1;
        if (gettingTheNumberOfOne(answer) === one) break;
    }
    return answer;
}