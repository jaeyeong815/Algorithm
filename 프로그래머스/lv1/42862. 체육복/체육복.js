function solution(n, lost, reserve) {
    let o = n - lost.length;
    reserve.forEach((el, idx) => {
        if (lost.includes(el)) {
            lost = lost.filter(n => n !== el);
            reserve = reserve.filter(n => n !== el);
            o += 1;
        }
    });
    lost.sort().forEach(el => {
        if (reserve.includes(el-1)) {
            o += 1;
            reserve = reserve.filter(n => n !== el-1);
        }
        else if (reserve.includes(el+1)) {
            o += 1;
            reserve = reserve.filter(n => n !== el+1);
        }
    })
    return o;
}