function solution(n, arr1, arr2) {
    const a = [];

    arr1 = arr1.map(el => el.toString(2).padStart(n, 0)).map(el => {
        let string = '';
        for (const str of el) {
            str === '1' ? string += '#' : string += ' '
        }
        return string
    });
    arr2 = arr2.map(el => el.toString(2).padStart(n, 0)).map(el => {
        let string = '';
        for (const str of el) {
            str === '1' ? string += '#' : string += ' '
        }
        return string
    });

    for (let i = 0; i<n; i++) {
        let p = '';
        for (let j = 0; j<n; j++) {
            if (arr1[i][j] === ' ' && arr2[i][j] === ' ') p += ' ';
            else p += '#';
        }
        a.push(p);
    }
    return a;
}

