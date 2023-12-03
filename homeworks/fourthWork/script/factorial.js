function nFactorial(value) {
  if (typeof value !== 'number') {
    return console.error('ви ввели не число');
  } 

  if (isNaN(value)) {
    return console.error('ви ввели не число');
  }

  if (!value || value === 1) {
    return 1;
  } else {
    return value * nFactorial(value - 1);
  }
}

export { nFactorial };
