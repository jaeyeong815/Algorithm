function solution(array, n) {
    let number = Infinity;
    let index;
    array.forEach((el, idx) => {
      if (number === Math.abs(el-n)) {
          index = Math.min(el, array[index]) === el ? idx : index
      }
      else if (Math.min(number,Math.abs(el-n)) === Math.abs(el-n)) {
        number = Math.abs(el-n)
        index = idx
      }
    })
    return array[index];
}