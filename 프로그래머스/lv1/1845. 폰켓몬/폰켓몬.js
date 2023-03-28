function solution(nums) {
    const o = {};
    nums.forEach(el => o[el] ? o[el] += 1 : o[el] = 1);
    return Object.keys(o).length > nums.length / 2 ? nums.length / 2 : Object.keys(o).length;
}