function solution(A, B) {
    let count = 0;

    if (A === B) return 0

    while (count !== A.length) {
      A = A.slice(-1) + A.slice(0 ,-1);
      count++;
      if(A === B) break;
    }
    
    if (count === A.length) return -1

    return count;
}