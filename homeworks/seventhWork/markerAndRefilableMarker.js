class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }

  write(text) {
    console.log(this.inkLevel);
    for (const char of text) {
      if (char !== " " && this.inkLevel > 0) {
        // console.log(`Запиши ${char} з ${this.color} маркер.`);
        this.inkLevel -= 0.5;
      }
    }
    console.log(this.inkLevel );
  }
}

class RefillableMarker extends Marker {
  constructor(color, inkLevel, capasity) {
    super (color, inkLevel);
    this.capasity = capasity;
  }

  refill() {
    console.log(this.inkLevel );
    if(this.inkLevel < 100) {
      const amountToRefill = this.capasity - this.inkLevel;
      // this.inkLevel += amountToRefill;
  
      console.log(`Перезаповніть ${amountToRefill}% фарби. Поточний рівень фарби: ${this.inkLevel}%`);
      this.inkLevel = this.inkLevel + amountToRefill;
      console.log(`Вітаємо! Ви заправили маркер. Тепер рівень фарби = ${this.inkLevel}%`);
 
    } else {
      console.log(`Заповнений`);
    }
  } 
}

// Приклад використання простого маркера
const simpleMarker = new Marker('blue', 50);
simpleMarker.write('Kate learn JS');

// Приклад використання перезаправлюваного маркера
const refillableMarker = new RefillableMarker('red', 30, 100);
refillableMarker.refill();

export default Marker