function solution(s) {
    const a = [];
    const obj = {};
    s.split('').forEach((el,idx) => {
        if(obj[el] !== undefined) {
            a.push(idx - obj[el]);
            obj[el] = idx;
        } else {
            obj[el] = idx;
            a.push(-1);
        }
    })
    return a;
}