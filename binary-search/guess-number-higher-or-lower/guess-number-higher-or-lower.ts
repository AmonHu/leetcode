/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                   1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
var guess = function (num: number) {
  return 0;
}

function guessNumber(n: number): number {
  let lo = 1, hi = n, mid = (n + 1) / 2;
  while (guess(mid) != 0) {
    mid = lo + (hi - lo) / 2;
    if (guess(mid) == 1) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return mid;
};