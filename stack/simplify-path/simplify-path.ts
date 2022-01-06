const simplifyPath = (path: string): string => {
  const pathStack: Array<string> = [];
  const paths: Array<string> = path.split('/').filter(p => p !== '');

  for (const p of paths) {
    if (p === '..') {
      if (pathStack.length) {
        pathStack.pop();
      }
    } else if (p !== '.') {
      pathStack.push(p);
    }
  }

  return `/${pathStack.join('/')}`;
};

const p = simplifyPath("/a/./b/../../c/");
console.log(p);