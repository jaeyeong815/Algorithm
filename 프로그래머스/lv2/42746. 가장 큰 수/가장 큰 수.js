function solution(numbers) {
    let answer = '';
    numbers.map((el, idx) => [idx, el.toString().repeat(4).slice(0,4)])
        .sort((a,b) => b[1] - a[1])
        .forEach(el => answer += numbers[el[0]]
        .toString());
    return Number(answer) === 0 ? "0" : answer;
}