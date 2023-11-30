// guess number
let num = +prompt("Введіть число гра на вгадування числа");
let minRange = 0;
let maxRange = 100;
let userAnswer = "";
while (true) {
  // Знаходимо середину поточного діапазону
  const guess = Math.floor((minRange + maxRange) / 2);
  // Питаємо у користувача, чи його число >, < чи == поточному числу
  userAnswer = prompt(
    `Ваше число більше (>), менше (<) чи дорівнює (=) ${guess}? Введіть один з символів.`
  );
  if (userAnswer === ">") {
    minRange = guess + 1; // Змінюємо мінімальний діапазон
  } else if (userAnswer === "<") {
    maxRange = guess - 1; // Змінюємо максимальний діапазон
  } else if (userAnswer === "=") {
    alert(`Ваше число - ${guess}! Гра завершена.`);
    break;
  } else {
    alert("Будь ласка, введіть коректний символ (> , < або =).");
  }
}

export { userAnswer };

// second max
let number = prompt("введіть від 2 - 9 і побачите таблицю множення");
let result = 0;
let strResult = "";
if (number >= 2 && number <= 9) { // числа для яких існує табличка множення
  for (let i = 1; i <= 10; i++) { // задаємо діапазон чисел на які множимо
    result = number * i;
    strResult = strResult + result + ", "; // саме множення
}
}
export { strResult };

// day month year
const day = +prompt("введіть день");
const month = +prompt("введіть місяць");
const year = +prompt("введіть рік");
let nextDay = day;
let nextMonth = month;
let nextYear = year;
if (day >= 1 && day <= 29) { // діапазон днів 30
  nextDay += 1;
} else if (day === 30) { // якщо 30 число то наступний день не +1 а перше число
  nextDay = 1;
}
if (day > 30) { // якщо день більше 30-го числа то додаєм місяць
  nextMonth += 1;
}
if (month >= 1 && month <= 11 && day === 30) { // задаємо що місяців 12 і якщо день 30 то збільшуємо дату місяця
  nextMonth += 1;
} else if (month === 12 && day === 30) { // якщо місяць 12 і день 30 то переходимо на перший місяць
  nextMonth = 1;
}
if (month === 12 && day === 30) { // якщо місяць 12 і день 30 то додаєємо рік
  nextYear += 1;
}
const date = `${nextDay} ${nextMonth} ${nextYear}`;
export { date };
