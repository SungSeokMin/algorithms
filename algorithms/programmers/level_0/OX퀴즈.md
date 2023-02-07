# 문제

[프로그래머스 - OX퀴즈](https://school.programmers.co.kr/learn/courses/30/lessons/120907)

# 해결

a. 주어진 quiz를 순회한다.  
b. 각 요소들을 공백 기준으로 split을 한다. -> [['3', '-', '4', '=', '-3'], ['5', '-', '6', '=', '11']]  
c. 이 중 0~2 인덱스에 있는 수를 계산하고 total에 저장한다. -> total = 3 - 4  
d. b를 i += 2 만큼 증가하면서 순회한다. 단, c에서 0~2를 계산했기 때문에 3부터 b의 길이 - 2까지 순회한다. -> '=', '-3' 을 제외  
e. +, - 를 확인하고 total에 누적한다.  
f. total과 b의 마지막 요소를 비교하여 같다면 'O'를, 아닌 경우 'X'를 answer에 저장한다.

```js
function solution(quiz) {
  const answer = [];

  quiz.forEach((element) => {
    const current = element.split(' ');

    const [first, sign, second] = [current[0], current[1], current[2]];
    let total = sign === '+' ? Number(first) + Number(second) : Number(first) - Number(second);

    for (let i = 3; i < current.length - 2; i += 2) {
      const el = current[i];
      const nextEl = Number(current[i + 1]);

      el === '+' ? (total += nextEl) : (total -= nextEl);
    }

    const lastEl = Number(current.at(-1));

    answer.push(total === lastEl ? 'O' : 'X');
  });

  return answer;
}
```
