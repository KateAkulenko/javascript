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

let time = {
  hours: 12, 
  minutes: 60, 
  seconds: 59,
}

function clock(time) {
  // Додаємо нуль перед числами з однієї цифри
  let formattedHours = time.hours < 10 ? "0" + time.hours : time.hours;
  let formattedMinutes = time.minutes < 10 ? "0" + time.minutes : time.minutes;
  let formattedSeconds = time.seconds < 10 ? "0" + time.seconds : time.seconds;

  console.log("Поточний час: " + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds);
}
clock(time);

function secondsChange(time) {
  let sHours = time.hours;
  let sMinutes = time.minutes;
  let sSeconds = time.seconds;
  if (sSeconds >= 60) {
    // якщо 60 секунд то хвилини +1 а секунда стає 0
    sMinutes += 1;
    sSeconds = 0;
  }
  if (sMinutes >= 60) {
    sMinutes = 0;
  }  
  console.log("Поточний час: " + sHours + ":" + sMinutes + ":" + sSeconds);
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
  if (sMinutes >= 60 && sSeconds >= 60) {
    sHours += 1;
    sMinutes = 0;
    sSeconds = 0;
  }
  console.log("Поточний час: " + sHours + ":" + sMinutes + ":" + sSeconds);
}
minutesChange(time);