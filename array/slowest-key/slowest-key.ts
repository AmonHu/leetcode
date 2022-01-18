function slowestKey(releaseTimes: number[], keysPressed: string): string {
  for (let i = releaseTimes.length - 1; i > 0; i--) {
    releaseTimes[i] -= releaseTimes[i - 1];
  }
  const maxDuration = Math.max(...releaseTimes);
  const maxIndexes: number[] = [];
  for (let i = 0; i < releaseTimes.length; i++) {
    if (releaseTimes[i] === maxDuration) {
      maxIndexes.push(i);
    }
  }

  let maxDurationKey = '\0';
  for (const i of maxIndexes) {
    if (keysPressed[i].charCodeAt(0) > maxDurationKey.charCodeAt(0)) {
      maxDurationKey = keysPressed[i];
    }
  }
  return maxDurationKey;
};

slowestKey([9, 29, 49, 50], "cbcd");