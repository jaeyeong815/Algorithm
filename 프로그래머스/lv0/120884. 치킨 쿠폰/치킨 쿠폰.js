function solution(chicken) {
    let service = 0;
    let rest = 0;
    
    while (chicken > 1) {
      service += Math.floor(chicken / 10);
      rest += Math.floor(chicken % 10);
      chicken /= 10;
    }
    
    while (rest >= 10) {
      service += Math.floor(rest / 10);
      rest = Math.floor(rest % 10) + Math.floor(rest / 10);
    }
    
    return service;
}