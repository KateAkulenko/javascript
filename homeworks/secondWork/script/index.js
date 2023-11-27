import {valueUsbMb, valueFiles} from './module-usb.js';
import {moneySumWithDot, priseOfChocolateWithDot, change} from './moduleChocolate.js';
import {numberUser, reverse} from './moduleReverse.js';
import {baseAmount, amountSM} from './moduleDepozit.js';

const sum = 0.1+0.2; // числа додаєм
console.log (sum.toFixed(2)); // додаєм і округлюєм до двох знаків після коми
const x = 2; // задаємо константу
const sumX = sum + x; // додаємо суму чисел константи першого рядка і константу третього рядка
console.log (sumX.toFixed(2)); // округлюємо результат до двох значень після коми

console.log(`На флешку поміститься ${Math.floor(valueUsbMb/valueFiles)} файлів`); /* ділимо обєм флешки на обєм файлів і
округлюємо до найближчого меншого числа from file module-usb */
console.log (`Ви можете купити ${Math.floor(moneySumWithDot/priseOfChocolateWithDot)} шоколадок`);/*рахує скільки шоколадок можна купити і округлює 
до найближчого меншого цілого from file moduleChocolate*/
console.log (`Ваша здача ${change.toFixed(2)} грн`);/* здачу скорочуємо до двох знаків після коми 
from file moduleChocolate*/
console.log(reverse(numberUser)); //виводимо результат обернене число from file module Reverse
console.log (`Нараховані відсотки ${(+amountSM - +baseAmount).toFixed(2)} грн`); /*Розраххунок самих
відсотків основна сума мінус сума збільшена на відсоткову ставку за 2 місяці from file moduleDepozit */



