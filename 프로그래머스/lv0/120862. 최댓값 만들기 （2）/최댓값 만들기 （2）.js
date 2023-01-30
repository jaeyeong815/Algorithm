function solution(numbers) {
    numbers.sort((a,b) => b-a)
    const min = numbers[numbers.length-1] * numbers[numbers.length-2]
    const max = numbers[0] * numbers[1]
    return Math.max(min, max)
}