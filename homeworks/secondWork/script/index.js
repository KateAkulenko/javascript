const sum = 0.1+0.2; // числа додаєм
console.log (sum.toFixed(2)); // додаєм і округлюєм до двох знаків після коми
const x = 2; // задаємо константу
const sumX = sum + x; // додаємо суму чисел константи першого рядка і константу третього рядка
console.log (sumX.toFixed(2)); // округлюємо результат до двох значень після коми

const valueUsb = prompt ("Вкажіть обє\'м флешки в ГБ"); // користувач вказує обєм флешки
const valueUsbMb = valueUsb*1024; // гігабайти переводяться в мегабайти
const valueFiles = 820; // обєм файлів які потрібно помістити на флешку
console.log(`На флешку поміститься ${Math.floor(valueUsbMb/valueFiles)} файлів`); // ділимо обєм флешки на обєм файлів і округлюємо до найближчого меншого числа

const moneySum = prompt ("Введіть суму грошей в грн");//користувач вводить суму
const moneySumWithDot = parseFloat(moneySum.replace(',', '.'));//змінюєм кому на крапку в числі
const priseOfChocolate = prompt ("Введіть ціну шоколадки");//ціна шоколадки
const priseOfChocolateWithDot = parseFloat(priseOfChocolate.replace(',', '.'));//змінюєм кому на крапку в числі
console.log (`Ви можете купити ${Math.floor(moneySumWithDot/priseOfChocolateWithDot)} шоколадок`);//рахує скільки шоколадок можна купити і округлює до найближчого меншого цілого
const change = moneySumWithDot%priseOfChocolateWithDot;//рахує здачу
console.log (`Ваша здача ${change.toFixed(2)} грн`);//здачу скорочуємо до двох знаків після коми

const numberUser = prompt ("вкажіть число");//число користувача
const reverse = (numberUser) => numberUser.toString().split('').reverse().join('');//переводимо число в рядок, перетворюємо на масив строк, міняємо порядок строк, обєднання масива в строку
console.log(reverse(numberUser)); //виводимо результат

const baseAmount = prompt ("Введіть суму вкладу в грн");//користувач вводить суму
const persentegeMonthly = 5/12;//процент за місяць 
const userPersentage = persentegeMonthly.toFixed(2);//процент за місяць скорочений до двох знаків після коми
const amountFM = +baseAmount + ((+baseAmount/100)*+userPersentage); // основний вклад плюс відсоток за перший місяць
const amountSM = +amountFM + ((+amountFM/100)*+userPersentage); // Вклад за перший місяць плюс відсоток за другий місяць
console.log (`Нараховані відсотки ${(+amountSM - +baseAmount).toFixed(2)} грн`); //Розраххунок самих відсотків основна сума мінус сума збільшена на відсоткову ставку за 2 місяці



