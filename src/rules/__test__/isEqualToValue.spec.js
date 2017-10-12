
const isEqualToValue = require('../isEqualToValue');

describe('isEqualToValue', () => {
  describe('should pass', () => {
    it('if the provided values are strictly equal', () => {
      expect(isEqualToValue(5, 5)).toBe(true);
      expect(isEqualToValue('asdfasd', 'asdfasd')).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided values are not strictly equal', () => {
      expect(isEqualToValue(3, '3')).toBe(false);
      expect(isEqualToValue(true, 1)).toBe(false);
      expect(isEqualToValue({}, {})).toBe(false);
    });

    it('if provided values are undefined', () => {
      expect(isEqualToValue()).toBe(false);
    });
  });
});

