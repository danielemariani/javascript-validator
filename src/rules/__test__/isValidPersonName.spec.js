
const isValidPersonName = require('../isValidPersonName');

describe('isValidPersonName', () => {
  describe('should pass', () => {
    it('if the provided value is a valid person name', () => {
      expect(isValidPersonName('Password')).toBe(true);
      expect(isValidPersonName('pajssó \'a')).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is not a valid person name', () => {
      expect(isValidPersonName('asdf12')).toBe(false);
      expect(isValidPersonName('Pas_!')).toBe(false);
    });

    it('if the provided value is an array', () => {
      expect(isValidPersonName([1, 2, 3])).toBe(false);
    });

    it('if the provided value is a number', () => {
      expect(isValidPersonName(1)).toBe(false);
    });

    it('if the provided value is null', () => {
      expect(isValidPersonName(null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(isValidPersonName()).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(isValidPersonName({})).toBe(false);
    });
  });
});

