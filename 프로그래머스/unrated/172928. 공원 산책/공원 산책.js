function solution(park, routes) {
    const direction = { E: 1, W: -1, N: -1, S: 1 };
    const map = {y: park.length-1, x: park[0].length-1}
    const mapCoordinate = { y: 0, x: 0 };
    park.forEach((el, idx) => el.includes('S') && (mapCoordinate.y =idx, mapCoordinate.x = el.indexOf('S')));
    
    for(const route of routes) {
        const [op, n] = route.split(' ');
        
        if (op === 'E' || op === 'W') {
            for (let i = 1; i <= +n; i++) {
                const distance = mapCoordinate.x + (direction[op]*i);
                if (distance > map.x || distance < 0 || park[mapCoordinate.y][distance] === 'X') break;
                if (i === +n) mapCoordinate.x = distance;
            }
        }
        
        if (op === 'N' || op === 'S') {
            for (let i = 1; i <= +n; i++) {
                const distance = mapCoordinate.y + (direction[op]*i);
                if (distance > map.y || distance < 0 || park[distance][mapCoordinate.x] === 'X') break;
                if (i === +n) mapCoordinate.y = distance;
            }
        }
    }
    
    return [mapCoordinate.y, mapCoordinate.x]
}