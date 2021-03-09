describe('Thermostat', function() {
  it('temperature starts at 20', function() {

      let thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);

  })
})
