
const isLessThan = require('../isLessThan');

describe('isMoreThan', () => {
  describe('should pass', () => {
    it('if the provided value is a number higher than the parameter', () => {
      expect(isLessThan(3, 2)).toBe(true);
      expect(isLessThan(3, -2)).toBe(true);
      expect(isLessThan(100, 99)).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is a number equal to the parameter', () => {
      expect(isLessThan(3, 3)).toBe(false);
    });

    it('if the provided value is a number lower than the parameter', () => {
      expect(isLessThan(5, 10)).toBe(false);
      expect(isLessThan(0, 2)).toBe(false);
      expect(isLessThan(1, 2)).toBe(false);
    });
  });
});
