function solution(t, p) {
    let c = 0;
    for(let i=0; i < t.length - p.length + 1; i++) {
        if (parseInt(t.slice(i, i + p.length)) > parseInt(p)) continue;
        c++;
    }
    return c
}