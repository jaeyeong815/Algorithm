function solution(s) {
    let count = 0;
    let zero = 0;
    let result = s;
    while(result !== '1') {
        const pre = result.length;
        result = result.split('').filter(el => el === '1');
        const next = result.length;
        result = next.toString(2);
        zero += pre - next;
        count++;
    }
    return [count, zero]
}