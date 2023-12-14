class Marker {
  constructor(color, colorLevel) {
    this.color = color;
    this.colorLevel = colorLevel;
  }

  write(text) {
    console.log(`Рівень фарби ${this.color} до роздрукування тексту ${this.colorLevel}`);
    for (const char of text) {
      if (char !== " " && this.colorLevel > 0) {
        this.colorLevel -= 0.5;
      }
    }
    console.log(`Рівень фарби ${this.color} після роздрукування тексту ${this.colorLevel}`);
  }
}

class RefillableMarker extends Marker {
  constructor(color, colorLevel, capasity) {
    super (color, colorLevel);
    this.capasity = capasity;
  }

  refill() {
    console.log(`Поточний рівень фарби ${this.colorLevel}%`);
    if(this.colorLevel < 100) {
      const volumeToRefill = this.capasity - this.colorLevel;
      console.log(`Необхідно додати ${volumeToRefill}% фарби.`);
      this.colorLevel += volumeToRefill;
      console.log(`Вітаємо! Ви заправили маркер. Тепер рівень фарби = ${this.colorLevel}%`);
    } else {
      console.log(`Заповнений`);
    }
  } 
}

const newMarker = new Marker('yellow', 77);
newMarker.write('Kate learn JS');

const refillableMarker = new RefillableMarker('red', 27, 100);
refillableMarker.refill();
