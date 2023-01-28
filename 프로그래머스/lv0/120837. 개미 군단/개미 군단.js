function solution(hp) {
    const ants = [5, 3, 1];
    let answer = 0;
    let divisor = hp;

    const arr = ants.map(ant => {
        answer += Math.floor(divisor/ant);
        divisor = divisor%ant
    })
    return answer;
}