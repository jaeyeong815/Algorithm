function solution(record) {
  const content = { Enter: '님이 들어왔습니다.', Leave: '님이 나갔습니다.' };
  const chat = [];
  const user = {};

  record.forEach((el) => {
    const [state, id, nickname] = el.split(' ');

    if (state !== 'Change') {
      chat.push([id, content[state]]);
    }

    if (nickname) {
      user[id] = nickname;
    }
  });
  return chat.map(([id, content]) => user[id] + content);
}