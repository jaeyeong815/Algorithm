function solution(s) {
    const arr = [];
    
    let index = 0;
    let nextIdx = 1;
    let str = s[index];
    let same = 1;
    let diff = 0;
    
    while(nextIdx < s.length) {
        if(s[nextIdx] === str) same++;
        else diff++;

        if(same === diff) {
            arr.push(s.slice(index, nextIdx+1));
            same = 1;
            diff = 0;
            index = nextIdx + 1;
            nextIdx = index + 1;
            str = s[index];
        }
        else nextIdx++;
    }
    
    if (str) arr.push(str);
    
    return arr.length;
}