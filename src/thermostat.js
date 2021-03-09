class Thermostat {
  constructor(temperature = 20, minTemp = 10) {
    this.temperature = temperature
    this.minTemp = minTemp
  }

  up(temp) {
    this.temperature += temp;
  }

  down(temp) {
    if (this.temperature - temp < this.minTemp) {
      this.temperature = 10;
    } else {
      this.temperature -= temp;
    }
  }
}
