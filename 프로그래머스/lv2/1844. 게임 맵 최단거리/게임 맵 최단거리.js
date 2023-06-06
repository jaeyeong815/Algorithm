function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    
    const queue = [[0, 0, 1]];

    while (queue.length) {
        const [y, x, distance] = queue.shift();
        if (y === n - 1 && x === m - 1) return distance;
            
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            if (nx >= 0 && ny >= 0 && nx < m && ny < n && maps[ny][nx] === 1) {
                maps[ny][nx] = 0;
                queue.push([ny, nx, distance + 1]);    
            }
        }
    }
    return -1;
}