# 두 줄 대기열에서 짝수 번호 뽑기

## 문제 설명

두 개의 대기열 `queue1`, `queue2`와 뽑을 인원 수 `k`가 주어진다.  
두 줄을 하나의 큐로 합친 뒤, 앞에서부터 한 명씩 꺼내 짝수 번호이면 결과에 추가하고, 홀수 번호이면 큐의 맨 뒤로 다시 보낸다.  
결과 배열의 길이가 `k`에 도달하거나 큐가 비면 종료하고, 뽑힌 짝수 번호 배열을 반환한다.

**예시:**
```
solution([1, 3, 4], [6, 5, 8], 3)
// → [4, 6, 8]
```

---

## 내 풀이

```js
function solution(queue1, queue2, k) {
  const queue = [...queue1, ...queue2];
  const result = [];

  while (result.length < k && queue.length > 0) {
    const person = queue.shift();

    if (person % 2 === 0) {
      result.push(person);
    } else {
      queue.push(person);
    }
  }

  return result;
}

console.log(solution([1, 3, 4], [6, 5, 8], 3));
```

### 풀이 과정

- 두 큐를 스프레드 연산자로 합쳐 하나의 배열로 만든다.
- `result.length < k`이고 큐에 원소가 남아 있는 동안 반복한다.
- 앞에서 꺼낸 값이 짝수이면 결과 배열에 추가하고, 홀수이면 큐 뒤로 재삽입한다.
- **시간복잡도:** O(n²) 최악 — `shift()`가 O(n), 홀수가 많을수록 반복 증가
- **공간복잡도:** O(n)

---

## 강사 풀이 (solutionByMenti)

강사 풀이 없음

---

## Claude 풀이

```js
function solution(queue1, queue2, k) {
  const queue = [...queue1, ...queue2];
  const result = [];
  let head = 0;

  while (result.length < k && head < queue.length) {
    const person = queue[head++];

    if (person % 2 === 0) {
      result.push(person);
    } else {
      queue.push(person);
    }
  }

  return result;
}
```

### 설명

- `shift()` 대신 `head` 포인터를 사용해 O(1) dequeue를 구현한다.
- 홀수 원소는 여전히 `push()`로 큐 뒤에 재삽입된다.
- **장점:** shift() 제거로 각 dequeue가 O(1)
- **주의:** 홀수가 매우 많고 k가 클 경우 무한루프에 가까운 상황이 될 수 있으므로, 입력 조건상 반드시 k개를 뽑을 수 있음이 보장되어야 한다.
- **시간복잡도:** O(n + m) (n: 전체 원소 수, m: 홀수 원소들이 재순환되는 횟수)
- **공간복잡도:** O(n)

---

## 두 풀이 최종 비교

| 항목 | 내 풀이 | Claude 풀이 |
|------|---------|-------------|
| 핵심 아이디어 | 배열 + shift() 재순환 | 배열 + head 포인터 재순환 |
| dequeue 비용 | O(n) (shift) | O(1) (포인터) |
| 코드 간결성 | 높음 | 높음 |
| 가독성 | 높음 | 높음 |
| 전체 시간복잡도 | O(n²) 최악 | O(n + m) |
| 공간복잡도 | O(n) | O(n) |

### 핵심 차이점

두 풀이 모두 동일한 로직(짝수 추출, 홀수 재삽입)을 사용하지만, 내 풀이의 `shift()`는 배열을 매번 재정렬하는 O(n) 연산이다. Claude 풀이는 head 포인터로 이를 O(1)로 대체해 전체 성능을 개선한다. 원소 수가 적은 경우엔 실질적 차이가 없지만, 큰 입력에서는 유의미한 차이가 생긴다.
