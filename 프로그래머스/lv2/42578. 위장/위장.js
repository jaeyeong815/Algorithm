function solution(clothes) {
    const obj = {};
    const length = [];
    let answer = 0;
    for(let el of clothes) {
        const [name, kind] = el;
        obj[kind] ? obj[kind].push(name) : obj[kind] = [name];
    }
    
    if (Object.values(obj).length === 1) return Object.values(obj)[0].length;

    for (let el of Object.values(obj)) {
        length.push(el.length)
    }
    
    const t = length.reduce((cal, cur) => cal *= (cur+1),1);
    return t-1
}
