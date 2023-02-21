# 문제

[프로그래머스 - A로 B만들기](https://school.programmers.co.kr/learn/courses/30/lessons/120886)

# 해결

a. before와 after를 각각 정렬한다.  
b. before의 요소와 after의 요소가 같은경우 1을 반환하고  
c. 다른경우 0을 반환한다.

```js
function solution(before, after) {
  const sortA = before.split('').sort();
  const sortB = after.split('').sort();

  return sortA.filter((element, index) => element !== sortB[index]).length ? 0 : 1;
}
```
