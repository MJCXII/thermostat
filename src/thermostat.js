class Thermostat {
  constructor(temperature = 20, minTemp = 10) {
    this.temperature = temperature
    this.minTemp = minTemp
    this.powersaver = true
  }

  up(temp) {
    if (this.powersaver === true && (temp + this.temperature) > 25) {
      this.temperature = 25
    } else if(temp + this.temperature > 32) {
      this.temperature = 32
    } else {
    this.temperature += temp;
    }
  }

  down(temp) {
    if (this.temperature - temp < this.minTemp) {
      this.temperature = 10;
    } else {
      this.temperature -= temp;
    }
  }

  powerSavingMode(status) {
    this.powersaver = status
  }

  reset() {
    this.temperature = 20
  }
}
