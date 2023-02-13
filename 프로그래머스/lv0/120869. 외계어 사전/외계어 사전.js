const isIncludes = (str, el) => str.includes(el);

function solution(spell, dic) {
    return dic.map(str => spell.every(el => isIncludes(str, el))).includes(true) ? 1 : 2
}