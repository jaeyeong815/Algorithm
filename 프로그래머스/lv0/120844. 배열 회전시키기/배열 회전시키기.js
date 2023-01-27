function solution(numbers, direction) {
    if (direction === 'left') {
        const el = numbers.shift();
        numbers.push(el);
    } else {
        const el = numbers.pop();
        numbers.unshift(el)
    }
        return numbers
}