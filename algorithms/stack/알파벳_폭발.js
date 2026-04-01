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

console.log(solution("infFflearn"));
console.log(solution("aAbBcC"));
console.log(solution("xYyX"));
console.log(solution("a"));
console.log(solution("Code"));
