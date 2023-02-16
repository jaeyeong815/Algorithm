function solution(quiz) {
    return quiz.map((el) => {
        const temp = el.split(" ");
        if (temp[1] === "+") {
            return +temp[0] + +temp[2] === +temp[4];
        } else {
            return +temp[0] - +temp[2] === +temp[4];
        }
    }).map(el => el ? 'O' : 'X')
}