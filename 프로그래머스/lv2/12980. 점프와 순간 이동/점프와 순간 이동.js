function solution(n) {
    let answer = 1;
    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        }
        else if (n % 2 !== 0) {
            answer += 1;
            n -= 1;
        }
    }
    return answer;
}