# 명령어 수행하기

## 문제 설명

문자열 배열 `commands`가 주어진다. 각 명령어는 다음 두 가지 중 하나이다:

- `"ENQUEUE {숫자}"` — 숫자를 큐에 추가한다.
- `"DEQUEUE"` — 큐의 앞에서 값을 꺼내 결과 배열에 추가한다. 큐가 비어 있으면 `"EMPTY"`를 결과 배열에 추가한다.

모든 명령을 수행한 뒤 결과 배열을 반환한다.

**예시:**
```
solution(["ENQUEUE 3", "ENQUEUE 5", "DEQUEUE", "DEQUEUE", "DEQUEUE"])
// → [3, 5, "EMPTY"]
```

---

## 내 풀이

```js
function solution(commands) {
  const queue = [];
  const reuslt = [];

  for (const command of commands) {
    const [action, value] = command.split(" ");

    if (action === "ENQUEUE") {
      queue.push(Number(value));
    } else {
      reuslt.push(queue.length === 0 ? "EMPTY" : queue.shift());
    }
  }

  return reuslt;
}

console.log(
  solution(["ENQUEUE 3", "ENQUEUE 5", "DEQUEUE", "DEQUEUE", "DEQUEUE"]),
);
```

### 풀이 과정

- `queue` 배열을 FIFO 큐로 사용하고, `result` 배열에 DEQUEUE 결과를 누적한다.
- 각 명령어를 공백 기준으로 split해 `action`과 `value`를 분리한다.
- ENQUEUE면 `push`, DEQUEUE면 `shift`로 앞에서 꺼낸다. 큐가 비어 있으면 `"EMPTY"` 추가.
- **시간복잡도:** O(n²) — `shift()`가 O(n)이므로 n개 명령어에 대해 O(n²) 최악
- **공간복잡도:** O(n)

---

## 강사 풀이 (solutionByMenti)

강사 풀이 없음

---

## Claude 풀이

```js
function solution(commands) {
  const queue = [];
  const result = [];
  let head = 0;

  for (const command of commands) {
    if (command.startsWith("ENQUEUE")) {
      queue.push(Number(command.slice(8)));
    } else {
      result.push(head < queue.length ? queue[head++] : "EMPTY");
    }
  }

  return result;
}
```

### 설명

- `head` 포인터를 사용해 `shift()` 대신 인덱스를 증가시켜 O(1) dequeue를 구현한다.
- `command.slice(8)`로 "ENQUEUE " (8자) 이후 숫자 문자열을 바로 추출한다.
- **장점:** shift() 제거로 시간복잡도 O(n)으로 개선
- **단점:** 메모리에 dequeue된 원소들이 남아 있음 (실용적으론 충분히 허용 범위)
- **시간복잡도:** O(n)
- **공간복잡도:** O(n)

---

## 두 풀이 최종 비교

| 항목 | 내 풀이 | Claude 풀이 |
|------|---------|-------------|
| 핵심 아이디어 | 배열 + shift() | 배열 + head 포인터 |
| 시간복잡도 | O(n²) | O(n) |
| 공간복잡도 | O(n) | O(n) |
| 코드 간결성 | 보통 | 비슷 |
| 가독성 | 높음 | 높음 |
| 오타 여부 | `reuslt` 오타 있음 | 없음 |

### 핵심 차이점

내 풀이는 JS 배열의 `shift()`를 사용하는데, 이는 배열 앞 원소를 제거한 뒤 나머지를 앞으로 당기는 O(n) 연산이다. 명령어가 많아질수록 성능이 저하된다. Claude 풀이는 head 포인터만 전진시켜 O(1)로 dequeue를 처리하며 O(n) 전체 시간복잡도를 달성한다.
