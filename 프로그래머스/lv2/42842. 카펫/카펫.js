function solution(brown, yellow) {
    let num = 1;
    let a = [];
    let w,h;
    
    while (num <= yellow) {
        if (yellow % num === 0) a.push(num);
        num++;
    }
    
    a = a.filter(el => ((brown + yellow) % (el + 2) === 0)).map(el => el + 2);
    w = Math.max(...a)
    h = (brown + yellow) / w
    return [w,h]
}