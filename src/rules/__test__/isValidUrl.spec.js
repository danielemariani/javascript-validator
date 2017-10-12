
const isValidUrl = require('../isValidUrl');

describe('isValidUrl', () => {
  describe('should pass', () => {
    it('if the provided value is a valid url', () => {
      expect(isValidUrl('http://a@com.it')).toBe(true);
      expect(isValidUrl('https://example.it')).toBe(true);
      expect(isValidUrl('//example.it')).toBe(true);
      expect(isValidUrl('//www.example.it')).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value is not a valid url', () => {
      expect(isValidUrl('www.example.it')).toBe(false);
      expect(isValidUrl('asdf12')).toBe(false);
      expect(isValidUrl('Pas_!')).toBe(false);
    });

    it('if the provided value is an array', () => {
      expect(isValidUrl([1, 2, 3])).toBe(false);
    });

    it('if the provided value is a number', () => {
      expect(isValidUrl(1)).toBe(false);
    });

    it('if the provided value is null', () => {
      expect(isValidUrl(null)).toBe(false);
    });

    it('if the provided value is undefined', () => {
      expect(isValidUrl()).toBe(false);
    });

    it('if the provided value is an object', () => {
      expect(isValidUrl({})).toBe(false);
    });
  });
});

