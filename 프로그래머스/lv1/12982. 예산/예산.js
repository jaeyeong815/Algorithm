function solution(d, budget) {
    // 계산하기 편하게 오름차순 정렬
    d = d.sort((a,b)=>a-b);
    
    // 예산의 총 합을 구한다
    let sum = d.reduce((cal, cur) => cal += cur,0);
    
    // 총 합과 예산을 비교한다
    // 같거나 예산이 더 크면 배열의 길이를 반환
    if (sum <= budget) return d.length;
    
    // 예산이 더 작다면 값을 하나씩 빼면서 비교한다
    let min;
       
    while(sum > budget) {
        let subArr = d.map((el) => sum - el);
        min = Math.min(...subArr);
        const tempArr = subArr.map(el => el === min).filter(el => el === true);
        if (tempArr.length > 1) {
            d.splice(d.findIndex(el => el === min), 1);
        } else {
            d = d.filter(el => sum-el !== min)            
        }
        sum = min
    }
    
    return d.length;
}