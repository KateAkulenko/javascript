function nFactorial(a) {
  let a = +prompt('Введіть число для обчислення факторіалу');
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

export {nFactorial};