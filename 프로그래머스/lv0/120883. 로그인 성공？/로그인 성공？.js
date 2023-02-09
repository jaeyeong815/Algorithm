function solution(id_pw, db) {
    let answer;

    for (const [dbId, dbPw] of db) {
      if(id_pw[0] === dbId) {
        answer = id_pw[1] === dbPw ? 'login' : 'wrong pw'
        break;
      }
        answer = 'fail'
    }
    return answer;
}