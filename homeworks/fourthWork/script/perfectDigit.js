function perfectDigit(number) {
  let sum = 0;
  let i = 1;
  if (typeof x !== 'number' || isNaN(x)) {
    ('неправильний тип данних');
  }
  if (number <= 1) {
    return 'значення менше нуля';
  }
  for (i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
}

function findPerfectDigit(min, max) {
  for (let i = min; i < max; i++) {
    if (i === perfectDigit(i)) {
      console.log(`Ідеальне число ${i}`);
    }
  }
}

export { findPerfectDigit, perfectDigit };
