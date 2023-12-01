// // варіанти написання функції
// // 1
// function firstFun() {
//   console.log('first message');
// }

// firstFun();

// // 2
// const secondFun = function (x, y) {
//   return x * y;
// };

// secondFun();

// // 3
// function thirdFun(a, b) {
//   return a + b;
// }

// thirdFun();

// // 4
// const fourthFun = (y, z) => y - z;

// fourthFun();

// рахує кількість переданих аргументів

// function countArg() {
//   const numberArg = arguments.length;
//   return numberArg;
// }

// // порівняння двох чисел з перевіркою типів даних
// function twoDigitsComparison(a, b) {
//   if (typeof a != 'number' || isNaN(a)) {
//     return 'В першому числі неправильний тип данних';
//   }

//   if (typeof b != 'number' || isNaN(b)) {
//     return 'В другому числі неправильний тип данних';
//   }

//   if (a < b) {
//     return 'result -1';
//   } else if (a === b) {
//     return 'result 0';
//   } else if (a > b) {
//     return 'result 1';
//   }
// }
// const num1 = Number(prompt('Введіть перше число')),
//   num2 = Number(prompt('Введіть друге число'));


// // факторіал
// function nFactorial(a) {
//   if (typeof a === 'number' && !isNaN(a)) {
//     if (a === 0 || a === 1) {
//       return 1;
//     } else {
//       return a * nFactorial(a - 1);
//     }
//   } else {
//     console.log('Введіть коректне число');
//   }
// }
// let a = Number(prompt('Введіть число для обчислення факторіалу'));

// // three numbers to one
// function oneNubmer(x, y, z) {
//   numbersToString = '' + x + y + z;
//   result = parseInt(numbersToString);
//   return result;
// }

// // площа прямокутника
// function square (x, y=0) {
// if (typeof x != 'number' || isNaN(x)) {
//   return 'В першому числі неправильний тип данних';
// }
// if (typeof y != 'number' || isNaN(y)) {
//   return 'В другому числі неправильний тип данних';
// }

//   if (y === 0) {
//     return x * x;
//   } else if (x => 0 && y >= 0) {
//     return x * y;
//   }
// }
// const x = Number(prompt('Введіть перше число')), 
//     y = Number(prompt('Введіть друге число')); 

// function perfectDigit(number) {
//   let sum = 0;
//   if (typeof number === 'number' && !isNaN(number)) {
//     if (number <= 1) {
//       return false;
//     }
//       for (i = 1; i < number; i++) {
//         if (number % i === 0) {
//           sum += i;
//         }
//       }
//     } else {
//       console.log('неправильний тип данних');
//     }
//     return sum;
//   }

// function findPerfectDigit(min, max) {
//   for (let i = Number(min); i < Number(max); i++) {
//     if (i === perfectDigit(i)) {
//       console.log(`Ідеальне число ${i}`);
//     }
//   }
// }


// export {countArg, twoDigitsComparison, nFactorial, oneNubmer, square, findPerfectDigit};
