
const isMoreThan = require('../isMoreThan');

describe('isMoreThan', () => {
  describe('should pass', () => {
    it('if the provided value is a number higher than the parameter', () => {
      expect(isMoreThan(5, 10)).toBe(true);
      expect(isMoreThan(0, 2)).toBe(true);
      expect(isMoreThan(1, 2)).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is a number equal to the parameter', () => {
      expect(isMoreThan(3, 3)).toBe(false);
    });

    it('if the provided value is a number lower than the parameter', () => {
      expect(isMoreThan(3, 2)).toBe(false);
      expect(isMoreThan(3, -2)).toBe(false);
      expect(isMoreThan(100, 99)).toBe(false);
    });
  });
});
