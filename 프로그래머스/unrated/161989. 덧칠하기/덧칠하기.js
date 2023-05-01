function solution(n, m, section) {
    let answer = 0;
    const wall = new Array(n+1).fill(true);
    section.forEach(el => wall[el] = false);
    
    for(let i=1; i<wall.length; i++) {
        if (!wall[i]) {
            for (let j=i; j<i+m; j++) {
                wall[j] = true;
            }
            answer++;
        }
    }
    return answer
}