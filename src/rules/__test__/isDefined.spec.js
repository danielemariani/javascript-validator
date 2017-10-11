
const isDefined = require('../isDefined');

describe('isDefined', () => {
  describe('should pass', () => {
    it('if the provided value is not undefined', () => {
      expect(isDefined([])).toBe(true);
      expect(isDefined(0)).toBe(true);
      expect(isDefined(false)).toBe(true);
      expect(isDefined(null)).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is "undefined"', () => {
      expect(isDefined(undefined)).toBe(false);
    });

    it('if no value is provided', () => {
      expect(isDefined()).toBe(false);
    });
  });
});

