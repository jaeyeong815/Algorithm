function solution(people, limit) {
    people.sort((a,b) => b-a)
    let c = 0;
    
    let l = 0;
    let r = people.length - 1;
    
    while (l<=r) {
        if (people[l] + people[r] > limit) {
            c += 1;
            l += 1;
        }
        else {
            c += 1;
            l += 1;
            r -= 1;
        }
    }
    
    return c;
}