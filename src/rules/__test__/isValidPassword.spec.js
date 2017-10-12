
const isValidPassword = require('../isValidPassword');

describe('isValidPassword', () => {
  describe('should pass', () => {
    it('if the provided value is a valid password', () => {
      expect(isValidPassword('Password22')).toBe(true);
      expect(isValidPassword('pass_1!')).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is not a valid password', () => {
      expect(isValidPassword('asdf')).toBe(false);
      expect(isValidPassword('Pas_!')).toBe(false);
    });

    it('if the provided value is an array', () => {
      expect(isValidPassword([1, 2, 3])).toBe(false);
    });

    it('if the provided value is a number', () => {
      expect(isValidPassword(1)).toBe(false);
    });

    it('if the provided value is null', () => {
      expect(isValidPassword(null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(isValidPassword()).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(isValidPassword({})).toBe(false);
    });
  });
});

