
const isValidUsername = require('../isValidUsername');

describe('isValidUsername', () => {
  describe('should pass', () => {
    it('if the provided value is a valid username', () => {
      expect(isValidUsername('alkjasidj')).toBe(true);
      expect(isValidUsername('a_2AsaskOÌ')).toBe(true);
    });

  });

  describe('should NOT pass', () => {
    it('if the provided value is not valid username', () => {
      expect(isValidUsername('')).toBe(false);
      expect(isValidUsername('uytra')).toBe(false);
      expect(isValidUsername('a.com')).toBe(false);
      expect(isValidUsername('1alskj#$$%')).toBe(false);
      expect(isValidUsername('alsjialsjialsjialsjialsjsi')).toBe(false);
    });

    it('if the provided value is a number', () => {
      expect(isValidUsername(4)).toBe(false);
    });

    it('if the provided value is null', () => {
      expect(isValidUsername(null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(isValidUsername()).toBe(false);
    });

    it('if the provided value is a boolean', () => {
      expect(isValidUsername(true)).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(isValidUsername({})).toBe(false);
    });
  });
});

