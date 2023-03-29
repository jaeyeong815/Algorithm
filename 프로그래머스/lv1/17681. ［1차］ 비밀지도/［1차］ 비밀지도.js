function solution(n, arr1, arr2) {
    const a = [];
    // 정수를 이진수로, n자릿수 수가 아니면 앞자리를 0으로 채우기
    arr1 = arr1.map(el => el.toString(2).padStart(n, 0)).map(el => {
        // 0이면 #, 1이면 공백을 치환하여 반환하기
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
    
    // 반복문 돌면서 arr1, arr2 둘 중 하나라도 #이면 #, 둘 다 공백이면 공백을 반환하여 답안 제출하기
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

