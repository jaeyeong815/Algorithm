function solution(bridge_length, weight, truck_weights) {
  const bridge = new Array(bridge_length).fill(0);
  let truckW = 0;
  let answer = 0;

  while (truck_weights.length !== 0) {
    const truck = bridge.shift();
    truckW -= truck;

    if (truckW + truck_weights[0] > weight) {
      bridge.push(0);
    } else {
      const truck = truck_weights.shift();
      bridge.push(truck);
      truckW += truck;
    }

    answer++;
  }

  for (let i = 0; i < bridge_length; i++) {
    answer++;
  }
  return answer;
}