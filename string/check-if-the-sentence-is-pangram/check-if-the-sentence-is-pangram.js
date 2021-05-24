/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let s = new Set(sentence);
    return s.size === 26;
};
