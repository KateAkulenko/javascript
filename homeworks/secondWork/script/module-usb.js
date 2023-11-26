const valueUsb = prompt ("Вкажіть обє\'м флешки в ГБ");
const valueUsbMb = valueUsb*1024;
const valueFiles = 820;
console.log(`На флешку поміститься ${Math.floor(valueUsbMb/valueFiles)} файлів`);