function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }
  describe('introduction(name)', function() {
    it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
      expect(introduction("Josh")).toEqual("Hi, my name is Josh.");
      expect(introduction("Nancy")).toEqual("Hi, my name is Nancy.");
    })
  })