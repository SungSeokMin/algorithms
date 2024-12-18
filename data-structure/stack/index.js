/**
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻이다.

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해보자.
*/

function solution(s) {
  const stack = [];

  for (const current of s) {
    if (current === "(") {
      stack.push(current);
    }

    if (current === ")") {
      if (stack.length === 0) return false;

      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log("🔥index: 26줄🔥", solution("()()"));
console.log("🔥index: 27줄🔥", solution("(())()"));
console.log("🔥index: 28줄🔥", solution(")()("));
console.log("🔥index: 29줄🔥", solution("(()("));
