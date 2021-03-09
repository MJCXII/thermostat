describe('Thermostat', function() {

  it('temperature starts at 20', function() {
      let thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);
  })

  it('can increase the temperature with an up function', function() {
      let thermostat = new Thermostat();
      thermostat.up(10)
      expect(thermostat.temperature).toEqual(30);
  })

  it('can decrease the temperature with a down function', function() {
      let thermostat = new Thermostat();
      thermostat.down(10)
      expect(thermostat.temperature).toEqual(10);
  })
})
