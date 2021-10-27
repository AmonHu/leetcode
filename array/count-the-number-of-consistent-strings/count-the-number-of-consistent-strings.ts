//
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed: string, words: string[]) {
  let count = 0;
  for (let w of words) {
    if (isConsistent(allowed, w)) {
      count++;
    }
  }

  return count;
};

var isConsistent = function (allowed: string, target: string) {
  for (let c of target) {
    if (allowed.indexOf(c) === -1) {
      return false;
    }
  }
  return true;
}

console.log(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]));