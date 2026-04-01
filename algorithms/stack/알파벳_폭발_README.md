# 알파벳 폭발

## 문제 설명

문자열에서 대문자와 소문자가 같은 알파벳이 인접하면 "폭발"하여 제거된다.
폭발 후 남은 문자열을 반환하라.

**예시:**
- `"aAbBcC"` → `""` (모두 폭발)
- `"infFflearn"` → `"inlearn"` (`fF`가 폭발)
- `"xYyX"` → `""` (`Yy` 폭발 → `xX` 폭발)

---

## 내 풀이

```js
function solution(s) {
  const stack = [];

  for (const char of s) {
    if (stack.length === 0) {
      stack.push(char);
      continue;
    }

    const stackTop = stack[stack.length - 1];
    const isUpper = isUpperCase(stackTop);

    if (isUpper) {
      const toUpper = char.toUpperCase();
      if (stackTop !== toUpper) {
        stack.push(char);
      } else {
        stack.pop();
      }
    } else {
      const toLower = char.toLowerCase();
      if (stackTop !== toLower) {
        stack.push(char);
      } else {
        stack.pop();
      }
    }
  }

  return stack.join("");
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}
```

### 풀이 과정

1. 스택이 비어있으면 바로 push
2. 스택의 top이 대문자인지 소문자인지 확인
3. top에 맞춰 현재 문자를 변환 후 비교
4. 같은 알파벳이면 pop (폭발), 다르면 push
5. 최종 스택을 문자열로 join

**시간복잡도:** O(n)  
**공간복잡도:** O(n)

---

## 강사 풀이 (solutionByMenti)

```js
function solutionByMenti(s) {
  const stack = [];

  for (const char of s) {
    const top = stack[stack.length - 1];

    const sameAlpha = top
      ? top && Math.abs(top.charCodeAt() - char.charCodeAt()) === 32
      : false;

    if (sameAlpha) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}
```

### 풀이 과정

1. 스택의 top과 현재 문자의 **ASCII 코드 차이**를 계산
2. 대문자와 소문자의 ASCII 차이는 항상 **32** (`'a'(97) - 'A'(65) = 32`)
3. 차이가 32이면 같은 알파벳의 대소문자 쌍 → pop (폭발)
4. 아니면 push

**핵심 아이디어:** `Math.abs(top.charCodeAt() - char.charCodeAt()) === 32`

---

## 내 풀이 vs 강사 풀이 비교

| 항목 | 내 풀이 | 강사 풀이 |
|------|---------|-----------|
| 비교 방법 | 대소문자 변환 후 문자열 비교 | ASCII 코드 차이 (32) 활용 |
| 코드 길이 | 길다 (isUpperCase 헬퍼 함수 포함) | 짧고 간결 |
| 스택 빈 경우 처리 | `if (stack.length === 0)` 별도 처리 | 삼항연산자로 인라인 처리 |
| 가독성 | 직관적 (변환 과정이 명시적) | 수학적 접근 (ASCII 지식 필요) |
| 성능 | O(n) | O(n) — 동일 |

### 핵심 차이점

내 풀이는 **문자열 변환**을 통해 비교하는 반면, 강사 풀이는 **ASCII 코드의 수학적 성질**을 활용한다.
영어 알파벳에서 대문자와 소문자의 ASCII 차이가 정확히 32라는 것을 알면 변환 없이 바로 비교할 수 있다.

```
'A' = 65,  'a' = 97  → 차이: 32
'B' = 66,  'b' = 98  → 차이: 32
'Z' = 90,  'z' = 122 → 차이: 32
```

---

## Claude 풀이

```js
function solutionByClaude(s) {
  const stack = [];

  for (const char of s) {
    const top = stack[stack.length - 1];

    if (top && top.toLowerCase() === char.toLowerCase() && top !== char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}
```

### 설명

`toLowerCase()`로 둘 다 소문자로 변환해서 같은지 확인하고, `top !== char`로 실제로 다른 케이스인지 확인한다.

- `top.toLowerCase() === char.toLowerCase()` → 같은 알파벳 여부
- `top !== char` → 대소문자가 다른지 여부 (같은 대문자끼리/소문자끼리는 폭발 안 함)

**장점:** isUpperCase 헬퍼 함수 불필요, 조건 하나의 표현식으로 정리  
**시간복잡도:** O(n) / **공간복잡도:** O(n)

---

## 세 풀이 최종 비교

| 항목 | 내 풀이 | 강사 풀이 | Claude 풀이 |
|------|---------|-----------|-------------|
| 비교 방식 | 대소문자 변환 후 비교 | ASCII 차이 (32) | toLowerCase 이중 비교 |
| 코드 간결성 | 낮음 | 높음 | 중간 |
| 직관성 | 높음 | 낮음 (ASCII 지식 필요) | 높음 |
| 헬퍼 함수 | 필요 | 불필요 | 불필요 |
