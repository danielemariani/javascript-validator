
const isArray = require('../isArray');

describe('isArray', () => {
  describe('should pass', () => {
    it('if the provided value is an array', () => {
      expect(isArray([])).toBe(true);
      expect(isArray([12])).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is a string', () => {
      expect(isArray('')).toBe(false);
      expect(isArray('a')).toBe(false);
      expect(isArray('12')).toBe(false);
    });

    it('if the provided value is null', () => {
      expect(isArray(null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(isArray()).toBe(false);
    });

    it('if the provided value is a boolean', () => {
      expect(isArray(true)).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(isArray({})).toBe(false);
    });
  });
});

