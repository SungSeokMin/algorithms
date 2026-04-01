// 스택에 집어넣고, 스택에서 확인하고, 닫히면 스택에서 pop하고

function solution(gate) {
  const stack = [];

  for (const char of gate) {
    if (char === "<") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(solution("<<>>"));
console.log(solution("<<>>"));
console.log(solution(">><<"));
console.log(solution("<<<>"));
