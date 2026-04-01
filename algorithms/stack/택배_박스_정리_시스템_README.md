# 택배 박스 정리 시스템

## 문제 설명

컨베이어 벨트에서 같은 번호의 박스가 연속으로 오면 하나로 합쳐 정리한다.
최종 스택 상태를 반환하라.

**예시:**
- `[2, 2, 5, 5, 5, 1, 1]` → `[2, 5, 1]`
- `[7, 7, 8, 8, 0, 0, 0]` → `[7, 8, 0]`

---

## 내 풀이

```js
function solution(boxes) {
  const stack = [];

  for (const box of boxes) {
    const top = stack[stack.length - 1];

    if (top !== box) {
      stack.push(box);
    }
  }

  return stack;
}
```

### 풀이 과정

1. 배열을 순회하면서 현재 박스와 스택의 top을 비교
2. 다르면 push, 같으면 무시 (연속 중복 제거)
3. 최종 스택 반환

**시간복잡도:** O(n)  
**공간복잡도:** O(n)

---

## 강사 풀이

강사 풀이 없음 (내 풀이만 존재)

---

## Claude 풀이

```js
function solutionByClaude(boxes) {
  return boxes.reduce((stack, box) => {
    if (stack[stack.length - 1] !== box) {
      stack.push(box);
    }
    return stack;
  }, []);
}
```

### 설명

`reduce`를 사용해 누산기(accumulator)로 스택을 관리한다.
로직은 동일하지만 함수형 스타일로 표현한 버전이다.

**장점:** 한 번의 표현식으로 처리, 함수형 패턴에 익숙하다면 가독성 향상  
**단점:** `reduce`에 익숙하지 않으면 오히려 읽기 어려울 수 있음

**시간복잡도:** O(n) / **공간복잡도:** O(n) — 내 풀이와 동일

---

## 풀이 비교

| 항목 | 내 풀이 | Claude 풀이 |
|------|---------|-------------|
| 스타일 | 명령형 (imperative) | 함수형 (functional) |
| 가독성 | 직관적 | reduce 이해 필요 |
| 성능 | O(n) | O(n) — 동일 |

> **포인트:** 내 풀이가 이미 최적에 가깝다. 명령형 방식이 더 직관적이고 디버깅도 쉬우므로 이 문제에서는 내 풀이가 오히려 더 좋다.
