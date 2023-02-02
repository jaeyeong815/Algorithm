function solution(my_string) {
    let answer = '';
    my_string.split('').forEach(el => answer.includes(el) ? '' : answer+=el);
    return answer;
}