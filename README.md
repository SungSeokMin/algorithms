> 더 좋은 풀이 방법이 있다면 Issue 채널로 알려주시면 감사하겠습니다 😅

# 💎 자료구조

메모리를 효율적으로 사용하며 빠르고 안정적으로 데이터를 처리하고 상황에 따라 유용하게 사용

**종류**

- 단순 구조 : 정수, 실수, 문자열, 논리
- 선형 구조 : [배열](https://github.com/SungSeokMin/front-end-algorithms/blob/master/data-structure/%EB%B0%B0%EC%97%B4.md), [연결 리스트](https://github.com/SungSeokMin/front-end-algorithms/blob/master/data-structure/%EC%97%B0%EA%B2%B0%EB%A6%AC%EC%8A%A4%ED%8A%B8.md), [스택](https://github.com/SungSeokMin/front-end-algorithms/blob/master/data-structure/%EC%8A%A4%ED%83%9D.md), [큐](https://github.com/SungSeokMin/front-end-algorithms/blob/master/data-structure/%ED%81%90.md)
- 비선형 구조 : 트리, 그래프

# 💎 알고리즘

특정 문제를 효율적이고 빠르게 해결하는 하고 정해진 일련의 절차나 방법을 공식화

# 💎 시간복잡도(Big-O)

![Big-O](https://user-images.githubusercontent.com/72539723/207779313-fa131738-8872-4c13-a390-62734f2371a8.png)

### O(1)

```js
const array = [1, 2, 3];
array[0];
```

### O(log n)

```js
for (let i = 1; i < n; i *= 2) {}
```

### O(n)

```js
for (let i = 0; i < n; i++) {}
```

### O(n log n)

```js
for (let i = 0; i < n; i++) {
  for (let j = 1; j <= n; j *= 2) {}
}
```

### O(n^2)

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}
```

# 💎 JavaScript 성능 측정 방법

```js
const start = new Date().getTime();

for (let i = 0; i < 1000000000; i++) {}

const end = new Date().getTime();

console.log(end - start); // 1320ms
```
