/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence: string) {
  let s = new Set(sentence);
  return s.size === 26;
};
