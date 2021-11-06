/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels: string, stones: string) {
  let jewelsCount = 0;
  for (let s of stones) {
    if (jewels.includes(s)) {
      jewelsCount++;
    }
  }
  return jewelsCount;
};

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStonesReg = function (jewels: string, stones: string) {
  let stonesLength = stones.length;
  let jewelsReg = eval(`/${jewels.split('').join('|')}/g`);
  stones = stones.replace(jewelsReg, '');
  return stonesLength - stones.length;
};

