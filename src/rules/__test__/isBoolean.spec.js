
const isBoolean = require('../isBoolean');

describe('isBoolean', () => {
  describe('should pass', () => {
    it('if the provided value is "true"', () => {
      expect(isBoolean(true)).toBe(true);
    });
    it('if the provided value is "false"', () => {
      expect(isBoolean(false)).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is a number', () => {
      expect(isBoolean('')).toBe(false);
    });

    it('if the provided value is a string', () => {
      expect(isBoolean('')).toBe(false);
    });

    it('if the provided value is null', () => {
      expect(isBoolean(null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(isBoolean()).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(isBoolean({})).toBe(false);
    });

    it('if the provided value is an array', () => {
      expect(isBoolean({})).toBe(false);
    });
  });
});

