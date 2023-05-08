function solution(name, yearning, photo) {
    const answer = [];
    const obj = {};
    name.forEach((el, idx) => obj[el] = yearning[idx]);
    for(let photoArr of photo) {
        let score = 0;
        for(let person of photoArr) if(obj[person]) score += obj[person]
        answer.push(score)
    }
    return answer;
}