class Round {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      console.error('Радіус має бути не менше 0.');
    }
  }

  get diameter() {
    return this._radius * 2;
  }

  calculateArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  calculateRoundLength() {
    return 2 * Math.PI * this._radius;
  }
}

const newRound = new Round(0);

console.log("Радіус кола:", newRound.radius);
console.log("Діаметр кола:", newRound.diameter);
console.log("Площа кола:", newRound.calculateArea());
console.log("Довжина кола:", newRound.calculateRoundLength());

export default Round;