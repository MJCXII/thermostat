describe('Thermostat', function() {

  it('temperature starts at 20', function() {
      let thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);
  })

  it('can increase the temperature with an up function', function() {
      let thermostat = new Thermostat();
      thermostat.up(5)
      expect(thermostat.temperature).toEqual(25);
  })

  it('can decrease the temperature with a down function', function() {
      let thermostat = new Thermostat();
      thermostat.down(10)
      expect(thermostat.temperature).toEqual(10);
  })

  it('cannot have a temperature lower than 10', function () {
    let thermostat = new Thermostat();
    thermostat.down(20)
    expect(thermostat.temperature).toEqual(10);
  })

  it('when powersaving mode is on, max temperature can not exceed 25', function() {
    let thermostat = new Thermostat();
    thermostat.powerSavingMode(true);
    thermostat.up(10)
    expect(thermostat.temperature).toEqual(25);
  })

// If power saving mode is off, the maximum temperature is 32 degrees
  it('cannot have a temperature higher than 32 when power saving mode is off', function() {
    let thermostat = new Thermostat();
    thermostat.powerSavingMode(false);
    thermostat.up(15)
    expect(thermostat.temperature).toEqual(32);
  })

  it('powersavingmode is on by default and can be toggled', function() {
    let thermostat = new Thermostat();
    expect(thermostat.powersaver).toEqual(true);
    thermostat.powerSavingMode(false);
    expect(thermostat.powersaver).toEqual(false);
  })

//You can reset the temperature to 20 with a reset function
  it('can reset the temperature to 20 with a reset function', function() {
    let thermostat = new Thermostat();
    thermostat.up(5);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  })

  it('displays correct energy usage', function() {
    let thermostat = new Thermostat();
    thermostat.down(5);
    expect(thermostat.energyUsage).toEqual("low-usage");
    thermostat.up(10);
    expect(thermostat.energyUsage).toEqual("medium-usage");
    thermostat.powerSavingMode(false);
    thermostat.up(1);
    expect(thermostat.energyUsage).toEqual("high-usage");
  })
})
