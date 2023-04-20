function solution(n,a,b) {
    let answer = 0;
    while(true) {
        answer++;
        if (a % 2 !== 0 && b % 2 === 0 && b-a === 1) break;
        if (a % 2 === 0 && b % 2 !== 0 && a-b === 1) break;
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
    }
    return answer;
}