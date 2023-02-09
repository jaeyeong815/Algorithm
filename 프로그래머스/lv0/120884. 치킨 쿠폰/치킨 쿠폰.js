function solution(chicken) {
    let service = 0;
    let rest = chicken;

    while (rest >= 10) {
      service += Math.floor(rest / 10);
      rest = Math.floor(rest % 10) + Math.floor(rest / 10);
    }
    
    return service;
}