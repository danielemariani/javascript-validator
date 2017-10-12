
const isValidEmail = require('../isValidEmail');

describe('isValidEmail', () => {
  describe('should pass', () => {
    it('if the provided value is a valid email', () => {
      expect(isValidEmail('asdfasdf@gmail.com')).toBe(true);
      expect(isValidEmail('b.h.a.w.s@asd.it.co.uk')).toBe(true);
    });

  });

  describe('should NOT pass', () => {
    it('if the provided value is not valid email', () => {
      expect(isValidEmail('')).toBe(false);
      expect(isValidEmail('a.com')).toBe(false);
      expect(isValidEmail('@hey.it')).toBe(false);
    });

    it('if the provided value is a number', () => {
      expect(isValidEmail(4)).toBe(false);
    });

    it('if the provided value is null', () => {
      expect(isValidEmail(null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(isValidEmail()).toBe(false);
    });

    it('if the provided value is a boolean', () => {
      expect(isValidEmail(true)).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(isValidEmail({})).toBe(false);
    });
  });
});

