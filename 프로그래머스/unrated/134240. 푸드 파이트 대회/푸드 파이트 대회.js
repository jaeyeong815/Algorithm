function solution(food) {
    let a = '';
    food.slice(1).forEach((f, idx) => {
        f / 2 < 1 ? '' : a += (idx+1).toString().repeat(Math.floor(f / 2))
    })
    return a + 0 + a.split('').reverse().join('')
}