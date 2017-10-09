
/* globals jest */

const validateValue = require('../validateValue');

describe('validateValue', () => {
  let aValidator;
  let aSecondValidator;

  beforeEach(() => {
    aValidator = { name: 'ruleA', test: jest.fn() };
    aSecondValidator = { name: 'ruleB', test: jest.fn() };

    aValidator.test
      .mockReturnValue(true);

    aSecondValidator
      .test.mockReturnValue(true);
  });

  describe('when provided a value and a list of validators', () => {
    describe('if the value do satisfy every condition', () => {
      it('should return a "is valid" result', () => {
        let validationResult = validateValue(12,
          [ aValidator, aSecondValidator ]
        );

        expect(validationResult).toEqual({
          value: 12,
          isValid: true,
          failingValidator: null
        });
      });

      it('every validator should have been tested on the value', () => {
        let validationResult = validateValue(12,
          [ aValidator, aSecondValidator ]
        );

        expect(aValidator.test)
          .toHaveBeenCalledWith(12);

        expect(aSecondValidator.test)
          .toHaveBeenCalledWith(12);
      });
    });

    describe('if the value do NOT satisfy every condition', () => {
      beforeEach(() => {
        aValidator.test
          .mockReturnValue(false);
      });

      it('should return a "is not valid" result, with the name of the failing validation', () => {
        let validationResult = validateValue(12,
          [ aValidator, aSecondValidator ]
        );

        expect(validationResult).toEqual({
          value: 12,
          isValid: false,
          failingValidator: 'ruleA'
        });
      });

      it('should stop the validation as soon as a test fails', () => {
        let validationResult = validateValue(12,
          [ aValidator, aSecondValidator ]
        );

        expect(aValidator.test)
          .toHaveBeenCalledWith(12);

        expect(aSecondValidator.test)
          .not.toHaveBeenCalled();
      });
    });
  });
});

