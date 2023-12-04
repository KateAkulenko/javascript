// function timeAndFuel (distance) {
//   let timeToTravel = 0;
//   let fuelToTravel = 0;
//   let auto = {
//     manufacturer: "Toyota",
//     model: "A23",
//     yearOfManufacture: 2019,
//     averageSpeed: 200,
//     fuelToTravel: 20,
//     averageFuelConsumptionPer100Km: 7,
//     timeToTravel: timeToTravel,
//     fuelToTravel: fuelToTravel,
//   };
//   console.log(auto);
//   auto.driver = "Alex";
//   console.log(auto.driver);
//   while (distance > 0) {
//     // Враховуємо час і паливо для подолання 4 годин швидкістю averageSpeed
//     let totalTime = Math.min(distance / auto.averageSpeed);
//     let travelDistance = totalTime * auto.averageSpeed;
//     let totalFuel = (travelDistance / 100) * auto.averageFuelConsumptionPer100Km;

//     // Враховуємо перерву на 1 годину кожні 4 години водіння
//     timeToTravel += totalTime + 1;
//     fuelToTravel += totalFuel;

//     // Зменшуємо відстань на подолану відстань
//     distance -= travelDistance;
// }

// return {
//   timeToTravel: timeToTravel,
//   fuelToTravel: fuelToTravel,
// };
// }

// console.log(timeAndFuel(500));

// Годинники

// let time = {
//   hours: 23, 
//   minutes: 1, 
//   seconds: 58,
// }

// function clock(time) {
//   // Додаємо нуль перед числами з однією цифрою
//   let formattedHours = time.hours < 10 ? "0" + time.hours : time.hours;
//   let formattedMinutes = time.minutes < 10 ? "0" + time.minutes : time.minutes;
//   let formattedSeconds = time.seconds < 10 ? "0" + time.seconds : time.seconds;

//   console.log("Поточний час: " + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds);
// }
// clock(time);

// function secondsChange(time) {
//   let sHours = time.hours;
//   let sMinutes = time.minutes;
//   let sSeconds = time.seconds;
//   if (sSeconds >= 60) {
//     // якщо 60 секунд і більше то хвилини +1 а секунда стає 0
//     sMinutes += 1;
//     sSeconds = 0;
//   }
//   // якщо 60 хвилин то відобразиться 0 
//   if (sMinutes >= 60) {
//     sMinutes = 0;
//   }  
//   if (sSeconds < 10) {
//     sSeconds = "0" + sSeconds;
//   }
//   if (sMinutes < 10) {
//     sMinutes = "0" + sMinutes;
//   }
//   console.log("Поточний час: " + sHours + ":" + sMinutes + ":" + sSeconds);
// }
// secondsChange(time);

// function minutesChange(time) {
//   let sHours = time.hours;
//   let sMinutes = time.minutes;
//   let sSeconds = time.seconds;
//   if (sSeconds === 60) {
//     // якщо 60 секунд то хвилини +1 а секунда стає 0
//     sMinutes += 1;
//     sSeconds = 0;
//   }
//   if (sMinutes >= 60) {
//     // якщо 60 секунд то хвилини +1 а секунда стає 0
//     sHours += 1;
//     sMinutes = 0;
//   }
//   // якщо більше рівне 60 секунд і більше рівне 60 хвилини то +1 година а секунда і хвилина стає 0
//   if (sMinutes >= 60 && sSeconds >= 60) {
//     sHours += 1;
//     sMinutes = 0;
//     sSeconds = 0;
//   }
//   if (sSeconds < 10) {
//     sSeconds = "0" + sSeconds;
//   }
//   if (sMinutes < 10) {
//     sMinutes = "0" + sMinutes;
//   }
//   console.log("Поточний час: " + sHours + ":" + sMinutes + ":" + sSeconds);
// }
// minutesChange(time);

// function hoursChange(time) {
//   let sHours = time.hours;
//   let sMinutes = time.minutes;
//   let sSeconds = time.seconds;
//   if (sSeconds === 60) {
//     // якщо 60 секунд то хвилини +1 а секунда стає 0
//     sMinutes += 1;
//     sSeconds = 0;
//   }
//   if (sMinutes >= 60) {
//     // якщо 60 секунд то хвилини +1 а секунда стає 0
//     sHours += 1;
//     sMinutes = 0;
//   }
//     // якщо більше рівне 60 секунд і більше рівне 60 хвилини то +1 година а секунда і хвилина стає 0
//   if (sMinutes >= 60 && sSeconds >= 60) {
//     sHours += 1;
//     sMinutes = 0;
//     sSeconds = 0;
//   }
//   // якщо більше рівне 24 годин то перемикається на 00 годин 
//   if (sHours >= 24) {
//     sHours = 0;
//   }
//   if (sSeconds < 10) {
//     sSeconds = "0" + sSeconds;
//   }
//   if (sMinutes < 10) {
//     sMinutes = "0" + sMinutes;
//   }
//   if (sHours < 10) {
//     sHours = "0" + sHours;
//   }
//   console.log("Поточний час: " + sHours + ":" + sMinutes + ":" + sSeconds);
// }
// hoursChange(time);

// дроби

let fraction1 = {
  numerator: 3,    // чисельник
  denominator: 4,   // знаменник
};
let fraction2 = {
  numerator: 2,    // чисельник
  denominator: 4,   // знаменник
};

function fractionAdd (fraction1, fraction2) {
  let integer = 0;
  let result = {
    numerator: fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator,
    denominator: fraction1.denominator * fraction2.denominator
}
console.log("Результат додавання:", result.numerator + "/" + result.denominator);

if (result.numerator > result.denominator) {
  integer = Math.floor(result.numerator/result.denominator);
  result.numeratorNew = result.numerator - (result.denominator * integer);
}

console.log("Результат додавання:", integer + " " + result.numeratorNew + "/" + result.denominator);

if (result.denominator % result.numeratorNew === 0) {
  result.numeratorNewShot = 1;
  result.denominator = result.denominator/result.numeratorNew;
}
console.log("Результат додавання:", integer + " " + result.numeratorNewShot + "/" + result.denominator);
}
fractionAdd (fraction1, fraction2);