function solution(emergency) {
    const emergencyObj = {};
    const copyEmergency = [...emergency]
    copyEmergency.sort((a,b) => b - a).forEach((el, index) => emergencyObj[el] = index + 1);
    return emergency.map(el => emergencyObj[el])
}