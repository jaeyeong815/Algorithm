function solution(X, Y) {
    const o = {};
    const a = [];
    X.split('').forEach(el => o[el] ? o[el] += 1 : o[el] = 1);
    Y.split('').forEach(el => {
        if (o[el]) {
            a.push(el);
            o[el] -= 1
        }
    });
    if(a.length === 0) return "-1"
    if(a.filter(el => el !== "0").length === 0) return "0"
    return a.sort((a,b) => b-a).join('')
}