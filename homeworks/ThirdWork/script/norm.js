// first norm
const numberUser = +prompt ("вкажіть пятизначне число");//число користувача
const reverse = (numberUser) => numberUser.toString().split('').reverse().join('');//переводимо число в рядок, перетворюємо на масив строк, міняємо порядок строк, обєднання масива в строку
let numberU  = reverse(numberUser); //присвоюємо перевернуте значення
let palindrome = "";
// console.log(+numberU); // виводимо перевернуте значення
if (numberUser >=99999 || numberUser <= 10000) {
    palindrome = "введіть норм цифру";
} else if (+numberUser === +numberU) { // строге порівняння
    palindrome = "паліндром"; // якщо паліндром то виводимо такий текст
    } else {
    palindrome = "не паліндром"; // в інших випадках такий текст
    }

export {palindrome};

// second norm
let summ = +prompt ("Введіть суму вашої покупки");
let discount = 0;
if (summ >= 200 && summ <= 300) {
    const PERSENTAGE_3 = 3;
    discount = summ - ((summ/100)*PERSENTAGE_3);
    // console.log ("Сума зі знижкою " + discount + " грн");
    } else if (summ >= 301 && summ <= 500) {
    const PERSENTAGE_5 = 5;
    discount = summ - ((summ/100)*PERSENTAGE_5);
    // console.log ("Сума зі знижкою " + discount + " грн");
    } else if (summ >= 501) {
    const PERSENTAGE_7 = 7;
    discount = summ - ((summ/100)*PERSENTAGE_7);
    // console.log ("Сума зі знижкою " + discount + " грн");
} else {
    discount = "no discount";
}

export {discount};

// fourth norm
const DAYS = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота', 'Неділя'];
let currentDay = 0;
while (confirm(`${DAYS[currentDay]}. Хочеш побачити наступний день?`)) {
    currentDay = (currentDay + 1) % DAYS.length;
}

