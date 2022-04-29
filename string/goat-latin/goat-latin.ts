function toGoatLatin(sentence: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const goatVoice = 'ma';
  return sentence
    .split(' ')
    .map((word, index) => {
      const firstLetter = word.slice(0, 1);
      if (vowels.indexOf(firstLetter.toLowerCase()) > -1) {
        word = `${word}${goatVoice}`;
      } else {
        const rest = word.slice(1);
        word = `${rest}${firstLetter}${goatVoice}`;
      }
      const suffix = new Array(index + 1).fill('a').join('');
      return `${word}${suffix}`;
    }).join(' ');
};
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));