function solution(s) {
    let p = 1;
    const a = [s[0]];
    while(p < s.length) {
        if (s[p] === a[a.length-1]) {
            a.pop();
            p = p + 1;
        }
        else {
            a.push(s[p]);
            p = p + 1;
        }
    }
    return a.length === 0 ? 1 : 0
}