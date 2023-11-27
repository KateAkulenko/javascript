const numberUser = prompt ("вкажіть число");//число користувача
const reverse = (numberUser) => numberUser.toString().split('').reverse().join('');//переводимо число в рядок, перетворюємо на масив строк, міняємо порядок строк, обєднання масива в строку
export {numberUser, reverse};