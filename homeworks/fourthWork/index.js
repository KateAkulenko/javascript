// // варіанти написання функції
// // 1
// function firstFun() {
//   console.log ('first message');
// }

// firstFun();

// // 2
// const secondFun = function(x , y) {
// return x * y;
// };

// secondFun();

// // 3
// function thirdFun(a, b) {
// return a + b;
// };

// thirdFun();

// // 4
// const fourthFun = (y, z) => y - z;

// fourthFun();


// // рахує кількість переданих аргументів

// function countArg() {
//   const numberArg = arguments.length;
//   console.log(numberArg); 
// }

// countArg(2, 3, 5, 5, 7);

// // порівняння двох чисел з перевіркою типів даних
// function twoDigitsComparison(a, b) {
// if (typeof a != 'number' || isNaN(a)) {
//   return 'В першому числі неправильний тип данних';
// }

// if (typeof b != 'number' || isNaN(b)) {
//   return 'В другому числі неправильний тип данних';
// }

// if (a < b ) {
//   return 'result -1';
// } else if (a === b) {
//   return 'result 0';
// } else if (a > b) {
//   return 'result 1';
// }
// }

// const num1 = Number(prompt('Введіть перше число')),
//      num2 = Number(prompt('Введіть друге число'));
// console.log(twoDigitsComparison(num1, num2));


// факторіал
// function nFactorial(a) {
//   if (a === 0 || a === 1) {
//     return 1;
//    } else {
//    return a * nFactorial(a - 1);
//   } 
//   }
//   console.log(nFactorial(3));

// three numbers to one
// function oneNubmer(x, y, z) {
//  numbersToString = '' + x + y + z;
//  result = parseInt(numbersToString);
// return result;
// }

// console.log(oneNubmer(1, 3, 6));

// //площа прямокутника
// function square (x, y) {
// // if (typeof x != 'number' || isNaN(x)) {
// //   return 'В першому числі неправильний тип данних';
// // }

// // if (typeof y != 'number' || isNaN(y)) {
// //   return 'В другому числі неправильний тип данних';
// // }

//   if (y === undefined) {
//     return x * x;
//   } else if (x => 0 && y >= 0) {
//     return x * y;
//   }
// }
// // const x = Number(prompt('Введіть перше число')),
// //      y = Number(prompt('Введіть друге число'));
// console.log(square());


// function perfectDigit(number) {
//   if (number <= 1) {
//       return false; // Відсутність досконалих чисел менших або рівних 1
//   }
//   let sum = 1; // 1 завжди є дільником, тому починаємо з 1
//   for (i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//           sum += i;
//           // Якщо дільник парний (крім квадратного кореня), додаємо його парне подвоєння
//           if (i !== number / i) {
//               sum += number / i;
//           }
//       }
//   }
//   // Число є досконалим, якщо його сума дільників дорівнює самому числу
//   return sum === number;
// }
// // Приклад використання
// console.log(perfectDigit(28)); 
// console.log(perfectDigit(6));  
// console.log(perfectDigit(12)); 
