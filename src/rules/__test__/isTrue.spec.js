
const isTrue = require('../isTrue');

describe('isTrue', () => {
  describe('should pass', () => {
    it('if the provided value is "true"', () => {
      expect(isTrue(true)).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is "false"', () => {
      expect(isTrue(false)).toBe(false);
    });
    it('if the provided value is not a boolean', () => {
      expect(isTrue(undefined)).toBe(false);
      expect(isTrue({})).toBe(false);
      expect(isTrue('A')).toBe(false);
      expect(isTrue('true')).toBe(false);
    });
  });
});

