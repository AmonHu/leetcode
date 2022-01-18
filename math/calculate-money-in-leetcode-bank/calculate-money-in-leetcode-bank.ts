function totalMoney(n: number): number {
  const base = 1;
  const dayOfWeek = 7;
  const count = Math.floor(n / dayOfWeek);
  const lastWeek = n % dayOfWeek;

  let totalMoney = 0;
  for (let i = 0; i <= count; i++) {
    if (i === count) {
      totalMoney += (base + i + base + i + lastWeek - 1) * lastWeek / 2;
    } else {
      totalMoney += (base + i) * dayOfWeek + dayOfWeek * (dayOfWeek - 1) / 2;
    }
  }
  return totalMoney;
};

console.log(totalMoney(20))