function solution(d, budget) {
    d = d.sort((a,b)=>a-b);
    let sum = d.reduce((cal, cur) => cal += cur,0);
    if (sum <= budget) return d.length;
    let min;
    while(sum > budget) {
        let subArr = d.map((el) => sum - el);
        min = Math.min(...subArr);
        const tempArr = subArr.map(el => el === min).filter(el => el === true);
        if (tempArr.length > 1) {
            d.splice(d.findIndex(el => el === min), 1);
        } else {
            d = d.filter(el => sum-el !== min)            
        }
        sum = min
    }
    return d.length;
}