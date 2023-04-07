function solution(n, words) {
    const answer = [0,0]
    let last = words[0].slice(-1);
    
    for (let i = 1; i<words.length; i++) {
        if (last === words[i][0]) {
            if (words.indexOf(words[i]) !== i) {
                answer[0] = (i % n) + 1;
                answer[1] = Math.floor(i / n)+1;
                break;
            }
            last = words[i].slice(-1);
        }
        else if (last !== words[i][0]) {
            answer[0] = (i % n) + 1;
            answer[1] = Math.floor(i / n)+1;
            break;
        }
    }
    return answer;
}