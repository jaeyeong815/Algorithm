function solution(clothes) {
    const obj = {};
    
    for(let el of clothes) {
        const [name, kind] = el;
        obj[kind] ? obj[kind] += 1 : obj[kind] = 1;
    }
    
    return Object.values(obj).reduce((cal, cur) => cal *= (cur+1),1) - 1
}
