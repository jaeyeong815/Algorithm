function solution(park, routes) {
    const direction = { E: 1, W: -1, N: -1, S: 1 };
    const map = {y: park.length-1, x: park[0].length-1}
    const mapCoordinate = { y: 0, x: 0 };
    park.forEach((el, idx) => el.includes('S') && (mapCoordinate.y =idx, mapCoordinate.x = el.indexOf('S')));
    
    for(const route of routes) {
        const [op, n] = route.split(' ');

        if (op === 'E' || op === 'W') {
            let distance = mapCoordinate.x + (direction[op]*n);
            if (distance > map.x || distance < 0) continue;
            for (let i = 1; i <= +n; i++) {
                distance = mapCoordinate.x + (direction[op]*i);
                if (park[mapCoordinate.y][distance] === 'X') break;
                if (i === +n) mapCoordinate.x = distance;
            }
        }
        
        if (op === 'N' || op === 'S') {
            let distance = mapCoordinate.y + (direction[op]*n);
            if (distance > map.y || distance < 0) continue;
            for (let i = 1; i <= +n; i++) {
                distance = mapCoordinate.y + (direction[op]*i);
                if (park[distance][mapCoordinate.x] === 'X') break;
                if (i === +n) mapCoordinate.y = distance;
            }
        }
    }
    
    return [mapCoordinate.y, mapCoordinate.x]
}