
const notContainsAnyEmail = require('../notContainsAnyEmail');

describe('notContainsAnyEmail', () => {
  describe('should pass', () => {
    it('if the provided value does not contain an email', () => {
      expect(notContainsAnyEmail('alkjasidj')).toBe(true);
      expect(notContainsAnyEmail('a_2AsaskOÌ')).toBe(true);
      expect(notContainsAnyEmail('a_2As.@askOÌ')).toBe(true);
      expect(notContainsAnyEmail('aaAs@askoi.a')).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided value does contain an email', () => {
      expect(notContainsAnyEmail('asDf@gmail.com')).toBe(false);
      expect(notContainsAnyEmail('a lkajsldi fl !, alskji asd!.asdf@hotmail.it mmmalskdjflia;ásdfsefasf')).toBe(false);
      expect(notContainsAnyEmail('a lkajsldi fl \n !, alskji asd!.asdf@gmail.com \n mmalskdjflia;ásdfsefasf')).toBe(false);
      expect(notContainsAnyEmail('aaAs@askoi.a@hey.com')).toBe(false);
    });
  });
});
