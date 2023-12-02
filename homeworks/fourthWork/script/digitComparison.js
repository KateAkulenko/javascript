function twoDigitsComparison(a, b) {
  if (typeof a != 'number' || isNaN(a)) {
    return 'В першому числі неправильний тип данних';
  }

  if (typeof b != 'number' || isNaN(b)) {
    return 'В другому числі неправильний тип данних';
  }

  if (a < b) {
    return 'result -1';
  } else if (a === b) {
    return 'result 0';
  } else if (a > b) {
    return 'result 1';
  }
}
const num1 = Number(prompt('Введіть перше число')),
  num2 = Number(prompt('Введіть друге число'));

  export {twoDigitsComparison};