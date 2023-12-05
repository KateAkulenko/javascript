// дроби
// додавання

let fraction1 = {
  numerator: 8, // чисельник
  denominator: 4, // знаменник
};
let fraction2 = {
  numerator: 3, // чисельник
  denominator: 4, // знаменник
};

function fractionAdd(fraction1, fraction2) {
  let integer = 0;
  let result = {
    numerator:
      fraction1.numerator * fraction2.denominator +
      fraction2.numerator * fraction1.denominator,
    denominator: fraction1.denominator * fraction2.denominator,
  };
  console.log(
    'Результат додавання:',
    result.numerator + '/' + result.denominator
  );

  if (result.numerator > result.denominator) {
    integer = Math.floor(result.numerator / result.denominator);
    result.numeratorNew = result.numerator - result.denominator * integer;
  }

  console.log(
    'Результат додавання:',
    integer + ' ' + result.numeratorNew + '/' + result.denominator
  );

  if (result.denominator % result.numeratorNew === 0) {
    result.numeratorNewShot = 1;
    result.denominator = result.denominator / result.numeratorNew;
  } else {
    result.numeratorNewShot = result.numeratorNew;
  }
  console.log(
    'Результат додавання:',
    integer + ' ' + result.numeratorNewShot + '/' + result.denominator
  );
}

fractionAdd(fraction1, fraction2);

// віднімання
function fractionDeduction(fraction1, fraction2) {
  let integer = 0;
  let result = {
    numerator:
      fraction1.numerator * fraction2.denominator -
      fraction2.numerator * fraction1.denominator,
    denominator: fraction1.denominator * fraction2.denominator,
  };
  console.log(
    'Результат віднімання:',
    result.numerator + '/' + result.denominator
  );

  if (result.numerator > result.denominator) {
    integer = Math.floor(result.numerator / result.denominator);
    result.numeratorNew = result.numerator - result.denominator * integer;
  }

  console.log(
    'Результат віднімання:',
    integer + ' ' + result.numeratorNew + '/' + result.denominator
  );

  if (result.denominator % result.numeratorNew === 0) {
    result.numeratorNewShot = 1;
    result.denominator = result.denominator / result.numeratorNew;
  } else {
    result.numeratorNewShot = result.numeratorNew;
  }
  console.log(
    'Результат віднімання:',
    integer + ' ' + result.numeratorNewShot + '/' + result.denominator
  );
}

fractionDeduction(fraction1, fraction2);

//множення

function fractionMultiply(fraction1, fraction2) {
  let integer = 0;
  let result = {
    numerator: fraction1.numerator * fraction2.numerator,
    denominator: fraction1.denominator * fraction2.denominator,
  };
  console.log(
    'Результат множення:',
    result.numerator + '/' + result.denominator
  );

  if (result.numerator > result.denominator) {
    integer = Math.floor(result.numerator / result.denominator);
    result.numeratorNew = result.numerator - result.denominator * integer;
  }

  console.log(
    'Результат множення:',
    integer + ' ' + result.numeratorNew + '/' + result.denominator
  );

  if (result.denominator % result.numeratorNew === 0) {
    result.numeratorNewShot = 1;
    result.denominator = result.denominator / result.numeratorNew;
  } else {
    result.numeratorNewShot = result.numeratorNew;
  }
  console.log(
    'Результат множення:',
    integer + ' ' + result.numeratorNewShot + '/' + result.denominator
  );
}

fractionMultiply(fraction1, fraction2);

//ділення
function fractionDividing(fraction1, fraction2) {
  let integer = 0;
  let result = {
    numerator: fraction1.numerator * fraction2.denominator,
    denominator: fraction1.denominator * fraction2.numerator,
  };
  console.log(
    'Результат ділення:',
    result.numerator + '/' + result.denominator
  );

  if (result.numerator > result.denominator) {
    integer = Math.floor(result.numerator / result.denominator);
    result.numeratorNew = result.numerator - result.denominator * integer;
  }

  console.log(
    'Результат ділення:',
    integer + ' ' + result.numeratorNew + '/' + result.denominator
  );

  if (result.denominator % result.numeratorNew === 0) {
    result.numeratorNewShot = 1;
    result.denominator = result.denominator / result.numeratorNew;
  } else {
    result.numeratorNewShot = result.numeratorNew;
  }

  console.log(
    'Результат ділення:',
    integer + ' ' + result.numeratorNewShot + '/' + result.denominator
  );
}

fractionDividing(fraction1, fraction2);

export {fractionAdd, fractionDeduction, fractionMultiply, fractionDividing}

