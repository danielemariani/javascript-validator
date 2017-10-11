
const isString = require('../../rules/isString');
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
  });
});

