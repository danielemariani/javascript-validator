
/* globals jest */

const validateListOfValues = require('../validateListOfValues');

describe('validateListOfValues', () => {
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

  describe('when provided a list of values and a list of validators', () => {
    describe('if every value do satisfy every condition', () => {
      it('should return a "is valid" result with the list of every value validation result', () => {
        let validationResult = validateListOfValues([12, 10],
          [ aValidator, aSecondValidator ]
        );

        expect(validationResult).toEqual({
          isValid: true,
          elementsValidations: [
            {
              value: 12,
              isValid: true,
              failingValidator: null
            },
            {
              value: 10,
              isValid: true,
              failingValidator: null
            }
          ]
        });
      });

      it('every validator should have been tested on every value', () => {
        let validationResult = validateListOfValues([12, 10],
          [ aValidator, aSecondValidator ]
        );

        expect(aValidator.test)
          .toHaveBeenCalledWith(12);

        expect(aSecondValidator.test)
          .toHaveBeenCalledWith(12);

        expect(aValidator.test)
          .toHaveBeenCalledWith(10);

        expect(aSecondValidator.test)
          .toHaveBeenCalledWith(10);
      });
    });

    describe('if one of the values do NOT satisfy every condition', () => {
      beforeEach(() => {
        aValidator.test
          .mockReturnValue(false);
      });

      it('should return a "is not valid" result, with the name of the failing validation', () => {
        let validationResult = validateListOfValues([12, 10],
          [ aValidator, aSecondValidator ]
        );

        expect(validationResult).toEqual({
          isValid: false,
          elementsValidations: [
            {
              value: 12,
              isValid: false,
              failingValidator: 'ruleA'
            },
            {
              value: 10,
              isValid: false,
              failingValidator: 'ruleA'
            }
          ]
        });
      });
    });
  });
});

