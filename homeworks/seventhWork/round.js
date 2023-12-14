class Round {
  constructor(radius) {
    this.radius = radius;
  }

  get radius() {
      return this._radius;
    }
  

  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      alert ('Радіус має бути не менше 0.');
    }
  }

  get diameter() {
    return this.radius * 2;
  }

  calculateArea() {
    return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
  }

  calculateRoundLength() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
}

const newRound = new Round(6);

console.log("Радіус кола:", newRound.radius);
console.log("Діаметр кола:", newRound.diameter);
console.log("Площа кола:", newRound.calculateArea());
console.log("Довжина кола:", newRound.calculateRoundLength());

