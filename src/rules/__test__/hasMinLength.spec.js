
const hasMinLength = require('../hasMinLength');

describe('hasMinLength', () => {
  describe('should pass', () => {
    it('if the provided value is a string with more or equal then given length', () => {
      expect(hasMinLength(1, 'a')).toBe(true);
      expect(hasMinLength(3, 'aasde')).toBe(true);
    });

    it('if the provided value is an array with more or equal then given length', () => {
      expect(hasMinLength(0, [0])).toBe(true);
      expect(hasMinLength(5, [0, 2, 3, 4, 5])).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is a string with less than given length', () => {
      expect(hasMinLength(3, 'as')).toBe(false);
    });

    it('if the provided value is an array with less than given length', () => {
      expect(hasMinLength(4, [1, 2])).toBe(false);
    });

    it('if the provided value is a number', () => {
      expect(hasMinLength(4, 1)).toBe(false);
    });

    it('if the provided value is null', () => {
      expect(hasMinLength(2, null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(hasMinLength(1)).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(hasMinLength(2, {})).toBe(false);
    });
  });
});

