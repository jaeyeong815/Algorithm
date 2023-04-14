const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
function solution(s) {
    let string = s;
    for (let i=0; i<arr.length; i++) {
        string = string.replaceAll(arr[i],i);
    }
    return +string;
}