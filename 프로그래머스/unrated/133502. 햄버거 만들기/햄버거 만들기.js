const ham = '1231'
function solution(ingredient) {
    let p = 0;
    let counter = 0;
    while(p < ingredient.length - 3) {
        if(ingredient.slice(p, p+4).join('') === ham) {
            ingredient.splice(p, 4)
            counter ++;
            p = p - 3;
        }
        else p++;
    }
    return counter
}