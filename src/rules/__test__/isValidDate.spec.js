
const isValidDate = require('../isValidDate');

describe('isValidDate', () => {
  describe('should pass', () => {
    it('if the provided value is a valid date', () => {
      expect(isValidDate(new Date())).toBe(true);
    });

    it('if the provided value can be converted in a valid date', () => {
      expect(isValidDate((new Date()).getTime())).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is a string that cannot be converted to a valid date', () => {
      expect(isValidDate('asdf')).toBe(false);
    });

    it('if the provided value is a number that cannot be converted to a valid date', () => {
      expect(isValidDate(12312312301923019283121)).toBe(false);
    });

    it('if the provided value is null', () => {
      expect(isValidDate(null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(isValidDate()).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(isValidDate({})).toBe(false);
    });

    it('if the provided value is anarray', () => {
      expect(isValidDate([])).toBe(false);
    });
  });
});

