function solution(arr) {
    const stack = [];
    arr.forEach((el,idx) => {
        if (arr[idx] !== arr[idx-1]) stack.push(el);
    })
    return stack;
}