function solution(skill, skill_trees) {
    let answer = 0;

    for(let skill_tree of skill_trees) {
        let temp = skill_tree.split('').filter(el => skill.includes(el));
        let flag = false;
        
        // 스킬 트리에 제시된 스킬이 포함되어있지 않을 땐 +1 한 뒤 다음 스킬트리로 넘어가기
        if (temp.length === 0) {
            answer++;
            continue;
        }
        
        for (let i = 0; i<temp.length; i++) {
            if (skill[i] !== temp[i]) break;
            if (temp.length - 1 === i) flag = true;
        }
        
        if (flag) answer++;
    }
    
    return answer
}