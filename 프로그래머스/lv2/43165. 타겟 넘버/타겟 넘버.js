function solution(numbers, target) {
    let a = 0;
    
    function dfs(index, sum) {
        if (index === numbers.length) {
            if (sum === target) {
                a += 1;
            }
            return;
        }
        
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0,0)
    
    return a;
}