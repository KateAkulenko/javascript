// Годинники

let time = {
  hours: 23,
  minutes: 1,
  seconds: 58,
};

function clock(time) {
  // Додаємо нуль перед числами з однією цифрою
  let formattedHours = time.hours < 10 ? '0' + time.hours : time.hours;
  let formattedMinutes = time.minutes < 10 ? '0' + time.minutes : time.minutes;
  let formattedSeconds = time.seconds < 10 ? '0' + time.seconds : time.seconds;

  console.log(
    'Поточний час: ' +
      formattedHours +
      ':' +
      formattedMinutes +
      ':' +
      formattedSeconds
  );
}
clock(time);

function secondsChange(time) {
  let sHours = time.hours;
  let sMinutes = time.minutes;
  let sSeconds = time.seconds;
  if (sSeconds >= 60) {
    // якщо 60 секунд і більше то хвилини +1 а секунда стає 0
    sMinutes += 1;
    sSeconds = 0;
  }
  // якщо 60 хвилин то відобразиться 0
  if (sMinutes >= 60) {
    sMinutes = 0;
  }
  if (sSeconds < 10) {
    sSeconds = '0' + sSeconds;
  }
  if (sMinutes < 10) {
    sMinutes = '0' + sMinutes;
  }
  console.log('Поточний час: ' + sHours + ':' + sMinutes + ':' + sSeconds);
}
secondsChange(time);

function minutesChange(time) {
  let sHours = time.hours;
  let sMinutes = time.minutes;
  let sSeconds = time.seconds;
  if (sSeconds === 60) {
    // якщо 60 секунд то хвилини +1 а секунда стає 0
    sMinutes += 1;
    sSeconds = 0;
  }
  if (sMinutes >= 60) {
    // якщо 60 секунд то хвилини +1 а секунда стає 0
    sHours += 1;
    sMinutes = 0;
  }
  // якщо більше рівне 60 секунд і більше рівне 60 хвилини то +1 година а секунда і хвилина стає 0
  if (sMinutes >= 60 && sSeconds >= 60) {
    sHours += 1;
    sMinutes = 0;
    sSeconds = 0;
  }
  if (sSeconds < 10) {
    sSeconds = '0' + sSeconds;
  }
  if (sMinutes < 10) {
    sMinutes = '0' + sMinutes;
  }
  console.log('Поточний час: ' + sHours + ':' + sMinutes + ':' + sSeconds);
}
minutesChange(time);

function hoursChange(time) {
  let sHours = time.hours;
  let sMinutes = time.minutes;
  let sSeconds = time.seconds;
  if (sSeconds === 60) {
    // якщо 60 секунд то хвилини +1 а секунда стає 0
    sMinutes += 1;
    sSeconds = 0;
  }
  if (sMinutes >= 60) {
    // якщо 60 секунд то хвилини +1 а секунда стає 0
    sHours += 1;
    sMinutes = 0;
  }
  // якщо більше рівне 60 секунд і більше рівне 60 хвилини то +1 година а секунда і хвилина стає 0
  if (sMinutes >= 60 && sSeconds >= 60) {
    sHours += 1;
    sMinutes = 0;
    sSeconds = 0;
  }
  // якщо більше рівне 24 годин то перемикається на 00 годин
  if (sHours >= 24) {
    sHours = 0;
  }
  if (sSeconds < 10) {
    sSeconds = '0' + sSeconds;
  }
  if (sMinutes < 10) {
    sMinutes = '0' + sMinutes;
  }
  if (sHours < 10) {
    sHours = '0' + sHours;
  }
  console.log('Поточний час: ' + sHours + ':' + sMinutes + ':' + sSeconds);
}
hoursChange(time);
export {clock, secondsChange, minutesChange, hoursChange, time}
