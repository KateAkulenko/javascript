function nFactorial(a) {
  if (typeof a === 'number' && !isNaN(a)) {
  } else {
    return console.error('ви ввели не число');
  }

  if (a === 0 || a === 1) {
    return 1;
  } else {
    return a * nFactorial(a - 1);
  }
}
let a = Number(prompt('Введіть число для обчислення факторіалу'));
export {nFactorial};