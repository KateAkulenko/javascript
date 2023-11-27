const valueUsb = prompt ("Вкажіть обє\'м флешки в ГБ"); // користувач вказує обєм флешки
const valueUsbMb = valueUsb*1024; // гігабайти переводяться в мегабайти
const valueFiles = 820; // обєм файлів які потрібно помістити на флешку

export {valueUsbMb, valueFiles};