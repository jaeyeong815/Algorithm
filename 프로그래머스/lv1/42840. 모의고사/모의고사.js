const a = [1, 2, 3, 4, 5];
const b = [2, 1, 2, 3, 2, 4, 2, 5];
const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
const obj = {1:0, 2:0, 3:0};

function solution(answers) {
    let max, temp;
    for(let i=0; i<answers.length; i++) {
        if(a[i%5] === answers[i]) obj[1] += 1;        
        if(b[i%8] === answers[i]) obj[2] += 1;        
        if(c[i%10] === answers[i]) obj[3] += 1;
    }
    for(let [key, value] of Object.entries(obj)) {
        if (!max) {
            max = value;
            temp = key;
        }
        else if (max > value) continue;
        else if (max < value) {
            max = value;
            temp = key;
        }
        else temp += key
    }
    return temp.split('').map(el => +el).sort((a,b) => a-b)
}