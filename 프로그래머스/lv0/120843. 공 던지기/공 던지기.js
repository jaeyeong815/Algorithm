function solution(numbers, k) {
    // k-1번만큼 첫번째 인덱스부터 +2 한다
    // 계산된 인덱스가 numbers 길이보다 크다면 길이로 나눈 나머지를 구한다
    const position = 2 * (k-1);
    const index = position > numbers.length ? position % numbers.length : position
    // 계산된 나머지가 인덱스인 값을 구한다
    return numbers[index];
}