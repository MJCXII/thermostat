class Thermostat {
  constructor(temperature = 20) {
    this.temperature = temperature
  }

  up(temp) {
    this.temperature += temp;
  }

  down(temp) {
    this.temperature -= temp;
  }

}
