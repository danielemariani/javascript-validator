
const isNonEmptyString = require('../isNonEmptyString');

describe('isNonEmptyString', () => {
  describe('should pass', () => {
    it('if the provided value is a non empty "string"', () => {
      expect(isNonEmptyString('a')).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is a number', () => {
      expect(isNonEmptyString(1)).toBe(false);
    });

    it('if the provided value is a empty string', () => {
      expect(isNonEmptyString('')).toBe(false);
    });

    it('if the provided value is null', () => {
      expect(isNonEmptyString(null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(isNonEmptyString()).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(isNonEmptyString({})).toBe(false);
    });

    it('if the provided value is an array', () => {
      expect(isNonEmptyString({})).toBe(false);
    });
  });
});

