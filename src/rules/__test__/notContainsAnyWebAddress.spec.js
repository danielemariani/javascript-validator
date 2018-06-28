
const notContainsAnyWebAddress = require('../notContainsAnyWebAddress');

describe('notContainsAnyWebAddress', () => {
  describe('should pass', () => {
    it('if the provided value does not contain a web address', () => {
      expect(notContainsAnyWebAddress('alkjasidj')).toBe(true);
      expect(notContainsAnyWebAddress('alalks djfl ajslj dfl a 1-2 03123 www.c fkjasidj')).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value does contain an email', () => {
      expect(notContainsAnyWebAddress('http://www.gmail.com')).toBe(false);
      expect(notContainsAnyWebAddress('https://asdf.uk')).toBe(false);
      expect(notContainsAnyWebAddress('oaasdfa.net')).toBe(false);
      expect(notContainsAnyWebAddress('http://a.ai')).toBe(false);
      expect(notContainsAnyWebAddress('a slkajsldi fl !, alskji https://asd!.asdf@hot:mail.it/asdf?12 mmmalskdjflia;ásdfsefasf')).toBe(false);
      expect(notContainsAnyWebAddress('i //asd!.asdf@hot:mail.it/asdf?12 mmmalskdjflia;ásdfsefasf')).toBe(false);
      expect(notContainsAnyWebAddress('a lkajs www.asdfasdfasdf.com mmmalskdjflia;ásdfsefasf')).toBe(false);
    });
  });
});
