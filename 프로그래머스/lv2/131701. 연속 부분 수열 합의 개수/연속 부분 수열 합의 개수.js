function solution(elements) {
    const arr = elements.concat(elements);
    const result = [];
    
    for(let i=0; i<elements.length; i++) {
        let num = 1;
        while(num<=elements.length) {
            result.push(arr.slice(i, i+num).reduce((acc, cur) => acc + cur, 0));
            num++;
        }
    }
    
    return [...new Set(result)].length;
}