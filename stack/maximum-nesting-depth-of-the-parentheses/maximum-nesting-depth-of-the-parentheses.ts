function maxDepth(s: string): number {
  const depths = [0];
  const stack = [];
  for (const item of s) {
    if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      depths.push(stack.length);
      stack.pop();
    }
  }
  return Math.max(...depths);
};

const d = maxDepth("1");
console.log(d);