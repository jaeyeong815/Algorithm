function solution(my_string) {
    return my_string.split('').map(el => el.toLowerCase()).sort().join('');
}