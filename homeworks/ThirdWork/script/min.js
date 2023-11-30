// first min
const age = +prompt("How old are you?"); //діалогове вікно з + для того що б сприймало тільки цифри
let message = "";
if (age === 0 && age <= 11) {
  // діапазон від 0 до 11
  message = "You are kid";
} else if (age >= 12 && age <= 17) {
  // діапазон від 12 до 17
  message = "You are teenager";
} else if (age >= 18 && age <= 59) {
  // діапазон від 18 до 59
  message = "You are adult";
} else if (age >= 60) {
  // діапазон від 60 і більше
  message = "You are senior";
}
export { message };

// second min
const digit = +prompt("Enter digit in range from 0 to 9"); // просимо ввести число від 0 до 9
let symbolOfNumber = "";
switch (digit) {
  case 0:
    symbolOfNumber = ")";
    break;
  case 1:
    symbolOfNumber = "!";
    break;
  case 2:
    symbolOfNumber = "@";
    break;
  case 3:
    symbolOfNumber = "#";
    break;
  case 4:
    symbolOfNumber = "$";
    break;
  case 5:
    symbolOfNumber = "%";
    break;
  case 6:
    symbolOfNumber = "^";
    break;
  case 7:
    symbolOfNumber = "&";
    break;
  case 8:
    symbolOfNumber = "*";
    break;
  case 9:
    symbolOfNumber = "(";
    break;
  default:
    symbolOfNumber = "You entered not right digit"; //повідомлення якщо число від 10 і більше
}
export { symbolOfNumber };

// third min
let first = +prompt("Enter first figure in range for its summ"); //перша цифра діапазону
let second = +prompt("Enter second figure in range for its summ"); //остання цифра діапазону
let i = +first; //присвоюєм змінній 'і' першу цифру
let sum = 0; //задаєм сумі нульове значення
do {
  sum += i; //просумувати всі числа діапазрну
  i++; //збільшувати першу цифру на 1
} while (i <= +second); // поки 'і' не досягне останньої цифри діапазону, яку не враховуємо

export { sum };

// fourth min
// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// Функція для знаходження НСД
function findGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
// Запит користувача на введення двох чисел
const number1 = parseInt(
  prompt("Введіть перше число що б знайти спільний дільник: ")
);
const number2 = parseInt(
  prompt("Введіть друге число що б знайти спільний дільник: ")
);
let gcd = 0;
// Перевірка чи введені коректні числа
if (isNaN(number1) || isNaN(number2)) {
  console.log("Будь ласка, введіть коректні числа.");
} else {
  // Знаходження та виведення результату
  gcd = findGCD(number1, number2);
}
export { gcd, number1, number2 };

// fifth min
// Запитай у користувача число і виведи всі дільники цього числа.
let a = +prompt("Введіть число що б взнати всі його дільники");
let dividers = 0;
let str = "";
for (let i = 1; i <= a; i++) {
  // посинаємо шукати дільники з 1 і +1 що б перевірити кожен, зупиниться коли буде рівне вказаному числу
  if (a % i === 0) {
    // відбираємо ті дільники які не залишають остачі
    dividers = i;
    str = str + dividers; // виводимо числа в рядок
  }
}
export { str };
