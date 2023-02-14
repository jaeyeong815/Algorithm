function solution(numbers) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    num.forEach((el, idx) => numbers = numbers.replaceAll(el, idx))
    return +numbers
}