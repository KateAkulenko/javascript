const baseAmount = prompt ("Введіть суму вкладу в грн");//користувач вводить суму
const persentegeMonthly = 5/12;//процент за місяць 
const userPersentage = persentegeMonthly.toFixed(2);//процент за місяць скорочений до двох знаків після коми
const amountFM = +baseAmount + ((+baseAmount/100)*+userPersentage); // основний вклад плюс відсоток за перший місяць
const amountSM = +amountFM + ((+amountFM/100)*+userPersentage); // Вклад за перший місяць плюс відсоток за другий місяць
export {baseAmount, persentegeMonthly, userPersentage, amountFM, amountSM};