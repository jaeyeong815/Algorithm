const obj = {"(": 0, ")":1}
function solution(s) {
    if (s.length%2 !== 0) return false;
    
    let p = 1;
    const stack = [s[0]];
    while(p < s.length){
        if (!stack.length) stack.push(s[p])
        else if (obj[stack[stack.length-1]] === 0 && obj[s[p]] === 1) stack.pop();
        else stack.push(s[p]);
        p+=1;
        
    }
    return stack.length > 0 ? false : true;
}