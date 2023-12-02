function square(x, y = 0) {
  let x = Number(prompt('Введіть перше число'));
  let y = Number(prompt('Введіть друге число'));
  if (typeof x !== 'number' || isNaN(x)) {
    return 'В першому числі неправильний тип данних';
  }
  if (typeof y !== 'number' || isNaN(y)) {
    return 'В другому числі неправильний тип данних';
  }

  if (!y) {
    return x * x;
  } else if ((x) => 0 && y >= 0) {
    return x * y;
  } else {
    return 0;
  }
  // return !y ? x * x : (x) => (0 && y >= 0 ? x * y : 0);
}
  export {square};