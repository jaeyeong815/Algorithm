function solution(progresses, speeds) {
    const answer = [];
    let arr = [];
    progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx])).forEach(progress => {
        if (arr.length === 0) arr.push(progress);
        
        else if(arr[0] < progress) {
            answer.push(arr.length);
            arr = [progress];
        }
        
        else arr.push(progress);
    });

    if (arr.length !== 0) answer.push(arr.length);
    return answer;
}
