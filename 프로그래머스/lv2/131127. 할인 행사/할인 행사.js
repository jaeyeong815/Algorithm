function solution(want, number, discount) {
    let answer = 0;
    let pointer = 0;
    while(pointer <= discount.length - 10) {
        const ten = discount.slice(pointer,pointer+10);
        let flag = false;
        for(let i=0; i<want.length; i++) {
            const exclude = ten.filter(el => el !== want[i]);
            if ((ten.length - exclude.length) !== number[i]) break;
            if (i === want.length -1) flag = true;
        }
        if (flag) answer++;
        pointer++;
    }
    return answer;
}