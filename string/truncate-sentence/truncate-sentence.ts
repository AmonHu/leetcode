/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s: string, k: number) {
  return s.split(' ').slice(0, k).join(' ');
};