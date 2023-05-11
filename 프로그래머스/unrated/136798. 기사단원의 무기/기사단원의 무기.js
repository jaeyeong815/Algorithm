function solution(number, limit, power) {
    const powerList = [];

    for(let i=1; i<=number; i++) {
        let result = 0;
        for(let j=1; j<=Math.sqrt(i); j++) {
            if(i % j === 0) result+=2;
            if(i / j === j) result-=1;
        }
        powerList.push(result);
    }
    
    return powerList.map(el => el > limit ? power : el).reduce((cal, cur) => cal + cur, 0);
}