# 특징

- 첫 번째로 추가된 요소가 마지막에 나온다.
- 마지막에 추가된 요소가 첫 번째로 나온다.

![스택](https://user-images.githubusercontent.com/72539723/208005472-e4d1d2e8-1cc9-4e59-90cb-b4f99d32ccb2.png)

## 동작 원리

- push() : 마지막에 요소를 추가
- pop() : 마지막에 요소를 삭제

![스택 동작 원리](https://user-images.githubusercontent.com/72539723/208005571-686f0af4-e9c9-4c51-8eee-5714d3c65fe1.png)

## Stack 구현

이미 `JavaScript에는 push() 함수와 pop() 함수가 정의`되어있기 때문에 따로 구현은 필요없다.

```js
const stack = [];

stack.push(0);
stack.push(1);
stack.push(2);

console.log(stack); // [0, 1, 2]

stack.pop();

console.log(stack); // [0, 1]
```
