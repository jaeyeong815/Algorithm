function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    const recordsObj = {};
    const answer = [];
    
    records.map(el => el.split(' ')).sort((a,b) => a[1] - b[1]).forEach(el => {
        const [time, car, status] = el;
        recordsObj[car] ? recordsObj[car] = [...recordsObj[car], time] : recordsObj[car] = [time]
    });
    
    for(let [car, times] of Object.entries(recordsObj).sort((a,b) => a[0] - b[0])) {
        let parkingTime = 0;
        for(let i=0; i<times.length; i+=2) {
            const [inH, inM] = times[i].split(':');
            
            if (times[i+1]) {
                const [outH, outM] = times[i+1].split(':');
                parkingTime += (outH - inH) * 60 + (outM - inM);
            }
            else parkingTime += (23 - inH) * 60 + (59 - inM);
        }
        
        if (parkingTime <= basicTime) answer.push(basicFee);
        else answer.push(basicFee + Math.ceil((parkingTime - basicTime)/unitTime) * unitFee)
    }
    return answer;
}