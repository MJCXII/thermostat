describe('Thermostat', function() {
  let thermostat = new Thermostat();

  it('temperature starts at 20', function() {
      expect(thermostat.temperature).toEqual(20);
  })

  it('can increase the temperature with an up function', function() {
      thermostat.up(10)
      expect(thermostat.temperature).toEqual(30);
  })
})
