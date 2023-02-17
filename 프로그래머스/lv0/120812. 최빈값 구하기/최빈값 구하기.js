function solution(array) {
    const obj = {};
    array.forEach(num => obj[num] ? obj[num] += 1 : obj[num] = 1);

    const max = Math.max(...Object.values(obj));
    let count = 0;
    let answer;

    for (let key of Object.keys(obj)) {
        if(obj[key] === max) {
            count += 1;
            answer = key
        }
        if(count > 1) return -1;
    }

    return +answer;
}