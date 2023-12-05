function timeAndFuel(distance) {
  let timeToTravel = 0;
  let fuelToTravel = 0;
  let auto = {
    manufacturer: 'Toyota',
    model: 'A23',
    yearOfManufacture: 2019,
    averageSpeed: 200,
    fuelToTravel: 20,
    averageFuelConsumptionPer100Km: 7,
    timeToTravel: timeToTravel,
    fuelToTravel: fuelToTravel,
  };
  console.log(auto);
  auto.driver = 'Alex';
  console.log(auto.driver);
  while (distance > 0) {
    // Враховуємо час і паливо для подолання 4 годин швидкістю averageSpeed
    let totalTime = Math.min(distance / auto.averageSpeed);
    let travelDistance = totalTime * auto.averageSpeed;
    let totalFuel =
      (travelDistance / 100) * auto.averageFuelConsumptionPer100Km;

    // Враховуємо перерву на 1 годину кожні 4 години водіння
    timeToTravel += totalTime + 1;
    fuelToTravel += totalFuel;

    // Зменшуємо відстань на подолану відстань
    distance -= travelDistance;
  }

  return {
    timeToTravel: timeToTravel,
    fuelToTravel: fuelToTravel,
  };
}

export {timeAndFuel}




