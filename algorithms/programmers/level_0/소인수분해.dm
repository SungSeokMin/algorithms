# 문제

[프로그래머스 - 소인수분해](https://school.programmers.co.kr/learn/courses/30/lessons/120852)

# 예외

- n이 3보자 작은 경우 [n]을 반환

# 해결

a. 소인수 분해를 구하는 함수를 만든다.  
a-a. n을 2로 나눌 수 있을 때 까지 나누고 n 저장  
a-b. 3의 제곱으로 나눌 수 있는 수 까지 나눈 후 n 저장  
a-c. n이 2보다 크다면 n 저장  
b. Set 객체를 이용해서 중복을 없앤 후 반환한다.

```js
function solution(n) {
  if (n <= 3) return [n];

  const getPrimeFactors = primeFactors(n);

  return [...new Set(getPrimeFactors)];
}

function primeFactors(n) {
  const answer = [];

  while (n % 2 == 0) {
    answer.push(2);
    n = n / 2;
  }

  for (var i = 3; i * i <= n; i = i + 2) {
    while (n % i == 0) {
      answer.push(i);
      n = n / i;
    }
  }

  if (n > 2) answer.push(n);

  return answer;
}
```