
const startsWith = require('../startsWith');

describe('startsWith', () => {
  describe('should pass', () => {
    it('if the provided value does start with the provided string', () => {
      expect(startsWith('start', 'start')).toBe(true);
      expect(startsWith('start', 'start+end')).toBe(true);
      expect(startsWith('s', 'start+end')).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value does not start with the provided string', () => {
      expect(startsWith('start', 'end+start')).toBe(false);
      expect(startsWith('start', 'star')).toBe(false);
      expect(startsWith('start', 'a start and a end')).toBe(false);
      expect(startsWith('#À#$901', '#á#$901')).toBe(false);
      expect(startsWith('', 'start')).toBe(false);
    });
  });
});
