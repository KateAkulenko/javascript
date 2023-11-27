const moneySum = prompt ("Введіть суму грошей в грн");//користувач вводить суму
const moneySumWithDot = parseFloat(moneySum.replace(',', '.'));//змінюєм кому на крапку в числі
const priseOfChocolate = prompt ("Введіть ціну шоколадки");//ціна шоколадки
const priseOfChocolateWithDot = parseFloat(priseOfChocolate.replace(',', '.'));//змінюєм кому на крапку в числі
const change = moneySumWithDot%priseOfChocolateWithDot;//рахує здачу

export {moneySum, moneySumWithDot, priseOfChocolate, priseOfChocolateWithDot, change};