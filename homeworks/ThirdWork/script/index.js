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
// switch (digit) { 
//   case 0:
//     console.log (")"); 
//     break;
//   case 1:
//     console.log ("!");
//     break;
//   case 2:
//     console.log ("@");
//     break;
//   case 3:
//       console.log ("#");
//       break;
//   case 4:
//       console.log ("$");
//       break;
//   case 5:
//     console.log ("%");
//     break;
//   case 6:
//       console.log ("^");
//       break;
//   case 7:
//     console.log ("&");
//     break;
//   case 8:
//     console.log ("*");
//     break;
//   case 9:
//       console.log ("(");
//       break;
//   default: 
//     console.log ("You entered not right digit"); //повідомлення якщо число від 10 і більше
// }

// let first = +prompt ("Enter first figure"); //перша цифра діапазону
// let second = +prompt ("Enter second figure"); //остання цифра діапазону
// let i = +first; //присвоюєм змінній 'і' першу цифру
// let sum = 0; //задаєм сумі нульове значення
// do {
//   i++; //збільшувати першу цифру на 1
//   console.log ( i ); //вивести послідовніть цифр діапазону
//   sum += i; //просумувати всі числа діапазрну
// } while (i < +second); // поки 'і' не досягне останньої цифри діапазону, яку не враховуємо
// console.log("Сума чисел у послідовності: " +sum);

// const numberUser = +prompt ("вкажіть пятизначне число");//число користувача
// const reverse = (numberUser) => numberUser.toString().split('').reverse().join('');//переводимо число в рядок, перетворюємо на масив строк, міняємо порядок строк, обєднання масива в строку
// let numberU  = reverse(numberUser); //присвоюємо перевернуте значення
// console.log(+numberU); // виводимо перевернуте значення
// if (+numberUser === +numberU) { // строге порівняння
//       console.log ("паліндром"); // якщо паліндром то виводимо такий текст
//     } else {
//       console.log ("не паліндром"); // в інших випадках такий текст
//     }


