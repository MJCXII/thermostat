class Thermostat {
  constructor(temperature = 20, minTemp = 10) {
    this.temperature = temperature
    this.minTemp = minTemp
    this.powersaver = true
    this.energyUsage = 'medium-usage'
  }

  up(temp) {
    if (this.powersaver === true && (temp + this.temperature) > 25) {
      this.temperature = 25
    } else if(temp + this.temperature > 32) {
      this.temperature = 32
    } else {
    this.temperature += temp;
    }
    this.updateEnergyUsage()
  }

  down(temp) {
    if (this.temperature - temp < this.minTemp) {
      this.temperature = 10;
    } else {
      this.temperature -= temp;
    }
    this.updateEnergyUsage()
  }

  powerSavingMode(status) {
    this.powersaver = status
  }

  reset() {
    this.temperature = 20
  }

  updateEnergyUsage() {
    if (this.temperature > 25) {
      this.energyUsage = "high-usage"
    } else if (this.temperature < 18) {
      this.energyUsage = 'low-usage'
    } else {
      this.energyUsage = 'medium-usage'
    }
  }

}
