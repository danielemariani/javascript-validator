
const isString = require('../../rules/isString');
const hasMaxLength = require('../../rules/hasMaxLength');
const adaptRuleToValidator = require('../adaptRuleToValidator');

describe('adaptRuleToValidator', () => {
  describe('when provided a rule name', () => {
    describe('and a rule with that name does exist', () => {
      it('should return a validator object for the rule', () => {
        expect(adaptRuleToValidator('isString'))
          .toEqual({
            name: 'isString',
            test: isString
          });
      });
    });

    describe('and a rule with that name does NOT exist', () => {
      it('should throw a "rule not found" exception', () => {
        expect(() => {
          adaptRuleToValidator('boh');
        })
          .toThrow();
      });
    });

    describe('and the rule has some params', () => {
      describe('should take the first part of the rule as its "name"', () => {
        let adaptedRule = adaptRuleToValidator('hasMaxLength:12');
        expect(adaptedRule.name).toBe('hasMaxLength');
      });

      describe('should bind those params to the rule', () => {
        let adaptedRule = adaptRuleToValidator('hasMaxLength:2');

        expect(adaptedRule.test)
          .not.toBe(hasMaxLength);

        expect(adaptedRule.test('a'))
          .toBe(true);
      });
    });
  });
});

