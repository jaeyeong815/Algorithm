function solution(sizes) {
    let w = [];
    let h = [];
    
    sizes = sizes.map(size => [Math.max(...size), Math.min(...size)]).forEach(el => {
        w.push(el[0]);
        h.push(el[1]);
    })
    
    return Math.max(...w) * Math.max(...h)
}