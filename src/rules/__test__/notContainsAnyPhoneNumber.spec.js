
const notContainsAnyPhoneNumber = require('../notContainsAnyPhoneNumber');

describe('notContainsAnyPhoneNumber', () => {
  describe('should pass', () => {
    it('if the provided value does not contain a phone number', () => {
      expect(notContainsAnyPhoneNumber('alkjasidj')).toBe(true);
      expect(notContainsAnyPhoneNumber('a_2AsaskOÌ')).toBe(true);
      expect(notContainsAnyPhoneNumber('a_2As.@askOÌ')).toBe(true);
      expect(notContainsAnyPhoneNumber('aaAs@askoi.a')).toBe(true);
      expect(notContainsAnyPhoneNumber('867574')).toBe(true);
      expect(notContainsAnyPhoneNumber('asd asf 1675747 alaks dlj faf ')).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value does contain a phone number', () => {
      expect(notContainsAnyPhoneNumber('+398675645374')).toBe(false);
      expect(notContainsAnyPhoneNumber('+18675 6453 74')).toBe(false);
      expect(notContainsAnyPhoneNumber('+1867564-5374')).toBe(false);
      expect(notContainsAnyPhoneNumber('askldjfklaj 8675645374 asdf asdf asdf')).toBe(false);
    });

    it('if the provided value does contain a "hidden" phone number', () => {
      expect(notContainsAnyPhoneNumber('askldj asd f\n !3485\n8716   74 asdf asdf asdf')).toBe(false);
      expect(notContainsAnyPhoneNumber('+\n3\n9\n3\n2\n4\n5\n4\n1\n8\n0\n1\n7 alk sdlkf jasf')).toBe(false);
    });
  });
});
