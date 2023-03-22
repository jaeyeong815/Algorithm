function solution(numbers) {
    const a = [];
    for(let i=0; i<=numbers.length-2; i++) {
        for(let j=numbers.length-1; j > i; j--) {
            a.push(numbers[i] + numbers[j])
        }
    }
    return [...new Set(a)].sort((a,b)=>a-b)
}