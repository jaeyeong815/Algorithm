function solution(number, k) {
    const arr = [];
    
    for(let num of number) {
        while(k > 0 && arr.length > 0 && arr.at(-1) < num) {
            arr.pop();
            k--;
        }
        arr.push(num);
    }
    
    while(k>0) {
        arr.pop()
        k--;
    }
    
    return arr.join('');
}