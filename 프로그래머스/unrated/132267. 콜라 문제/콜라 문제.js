function solution(a, b, n) {
    let get = 0;
    while(n>=a) {
        get += Math.floor(n/a) * b;
        n = Math.floor(n/a) * b + n%a;
    }
    return get;
}