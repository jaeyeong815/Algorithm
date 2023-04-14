function solution(k, tangerine) {
    const tangerines = new Array(Math.max(...tangerine)).fill(0);
    tangerine.forEach(el => tangerines[el-1] += 1);
    tangerines.sort((a,b) => b-a);

    let answer = 0;
    let packedCount = 0;
    
    for(let tangerine of tangerines) {
        if (packedCount > k || packedCount === k) break;
        packedCount += tangerine
        answer ++;
    }
    return answer;
}