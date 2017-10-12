
const hasMaxLength = require('../hasMaxLength');

describe('hasMaxLength', () => {
  describe('should pass', () => {
    it('if the provided value is a string with less or equal then given length', () => {
      expect(hasMaxLength(5, 'a')).toBe(true);
      expect(hasMaxLength(5, 'aasde')).toBe(true);
    });

    it('if the provided value is an array with less or equal then given length', () => {
      expect(hasMaxLength(5, [0])).toBe(true);
      expect(hasMaxLength(5, [0, 2, 3, 4, 5])).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is a string with more than given length', () => {
      expect(hasMaxLength(3, 'asdf')).toBe(false);
    });

    it('if the provided value is an array with more than given length', () => {
      expect(hasMaxLength(2, [1, 2, 3])).toBe(false);
    });

    it('if the provided value is a number', () => {
      expect(hasMaxLength(2, 1)).toBe(false);
    });

    it('if the provided value is null', () => {
      expect(hasMaxLength(2, null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(hasMaxLength(1)).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(hasMaxLength(2, {})).toBe(false);
    });
  });
});

