function solution(strings, n) {
    return strings.map(string => {
        return {el: string[n], str: string}
    }).sort((a,b) => {
        if (a.el > b.el) return 1
        if (a.el < b.el) return -1
        if (a.str > b.str) return 1
        if (a.str < b.str) return -1
        return 0
    }).map(el => el.str);
}