/**
 * 链接：/solution/pa-lou-ti-by-leetcode-solution/
 */
function climbStairs(n: number): number {
  let p: number = 0;
  let q: number = 0;
  let r: number = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
