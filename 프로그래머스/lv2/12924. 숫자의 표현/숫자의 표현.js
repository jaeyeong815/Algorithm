function solution(n) {
    if (n < 3) return 1
    let p = 1;
    let c = 0;
    let add = 0;
    while(p <= n) {
        for (let i=p; i<=n; i++) {
            add += i;
            if (add === n) {
                c += 1;
                break;
            }
            if (add > n) break;
        }
        add = 0;
        p += 1;
    }
    return c
}