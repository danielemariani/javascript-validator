
const isNumber = require('../isNumber');

describe('isNumber', () => {
  describe('should pass', () => {
    it('if the provided value is a number', () => {
      expect(isNumber(0)).toBe(true);
      expect(isNumber(12)).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is a string', () => {
      expect(isNumber('')).toBe(false);
      expect(isNumber('a')).toBe(false);
      expect(isNumber('12')).toBe(false);
    });

    it('if the provided value is null', () => {
      expect(isNumber(null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(isNumber()).toBe(false);
    });

    it('if the provided value is a boolean', () => {
      expect(isNumber(true)).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(isNumber({})).toBe(false);
    });
  });
});

