
const matches = require('../matches');

describe('matches', () => {
  describe('should pass', () => {
    it('if the provided value matches the regexp', () => {
      expect(matches('\\w+', 'http://a@com.it')).toBe(true);
      expect(matches('\\d{1,2}', '12')).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value does NOT match the regexp', () => {
      expect(matches('[1-9]+', 'www.example.it')).toBe(false);
      expect(matches('\\w{1,2}', 'asdfasdf')).toBe(true);
    });
  });
});
