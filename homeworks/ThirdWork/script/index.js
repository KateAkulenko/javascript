// const age = +prompt ("How old are you?"); //діалогове вікно з + для того що б сприймало тільки цифри
// if (age === 0 && age <= 11) { // діапазон від 0 до 11
//   console.log ("You are kid");
// } else if (age >= 12 && age <= 17) { // діапазон від 12 до 17
//   console.log ("You are teenager");
// } else if (age >= 18 && age <= 59) { // діапазон від 18 до 59
//   console.log ("You are adult");
// } else if (age >= 60) { // діапазон від 60 і більше
//   console.log ("You are senior");
// }

// const digit = +prompt ("Enter digit in range from 0 to 9"); // просимо ввести число від 0 до 9 
// if (digit ===0) { // строга перевірка числа, якщо співпадає
//   console.log (")"); // то тут виводиться знак на клавіатурі
// } else if (digit === 1) { // строга перевірка числа, якщо співпадає
//   console.log ("!"); // то тут виводиться знак на клавіатурі
// } else if (digit === 2) { // строга перевірка числа, якщо співпадає
//   console.log ("@"); // то тут виводиться знак на клавіатурі
// } else if (digit === 3) { // строга перевірка числа, якщо співпадає
//   console.log ("#"); // то тут виводиться знак на клавіатурі
// } else if (digit === 4) { // строга перевірка числа, якщо співпадає
//   console.log ("$"); // то тут виводиться знак на клавіатурі
// } else if (digit === 5) { // строга перевірка числа, якщо співпадає
//   console.log ("%"); // то тут виводиться знак на клавіатурі
// } else if (digit === 6) { // строга перевірка числа, якщо співпадає
//   console.log ("^"); // то тут виводиться знак на клавіатурі
// } else if (digit === 7) { // строга перевірка числа, якщо співпадає
//   console.log ("&"); // то тут виводиться знак на клавіатурі
// } else if (digit === 8) { // строга перевірка числа, якщо співпадає
//   console.log ("*"); // то тут виводиться знак на клавіатурі
// } else if (digit === 9) { // строга перевірка числа, якщо співпадає
//   console.log ("("); // то тут виводиться знак на клавіатурі
// } else if (digit >= 10) {
//   console.log ("You entered not right digit"); //повідомлення якщо число від 10 і більше
// }

// let first = +prompt ("Enter first figure");
// let second = +prompt ("Enter second figure");
// let result = 0;
// let i = 0;
// for (i = first; i < second; i++); {
//   console.log (i);
// }
// console.log (i);

let first = +prompt ("Enter first figure");
let second = +prompt ("Enter second figure");
let i = +first;
let sum = 0;
do {
  console.log ( i );
  i++;
} while (i < +second);

console.log (`сума чисел ${sum += i}`);