
const isString = require('../isString');

describe('isString', () => {
  describe('should pass', () => {
    it('if the provided value is a string', () => {
      expect(isString('')).toBe(true);
      expect(isString('a')).toBe(true);
      expect(isString('12')).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is a number', () => {
      expect(isString(12)).toBe(false);
    });
    it('if the provided value is null', () => {
      expect(isString(null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(isString()).toBe(false);
    });

    it('if the provided value is a boolean', () => {
      expect(isString(true)).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(isString({})).toBe(false);
    });
  });
});

