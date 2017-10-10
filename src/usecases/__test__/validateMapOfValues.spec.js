
/* globals jest */

const validateMapOfValues = require('../validateMapOfValues');

describe('validateMapOfValues', () => {
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

  describe('when provided a map of values and a list of validators', () => {
    describe('if every value does satisfy every condition', () => {
      it('should return a "is valid" result with the map of every value validation result', () => {
        let validationResult = validateMapOfValues(
          { a: 12, b: 10 },
          {
            a: [ aValidator, aSecondValidator ],
            b: [ aValidator ]
          }
        );

        expect(validationResult).toEqual({
          isValid: true,
          propsValidations: {
            a: {
              isValid: true
            },
            b: {
              isValid: true
            }
          }
        });
      });

      it('every validator should have been tested on every value', () => {
        let validationResult = validateMapOfValues(
          { a: 12, b: 10 },
          {
            a: [ aValidator, aSecondValidator ],
            b: [ aValidator ]
          }
        );

        expect(aValidator.test)
          .toHaveBeenCalledWith(12);

        expect(aSecondValidator.test)
          .toHaveBeenCalledWith(12);

        expect(aValidator.test)
          .toHaveBeenCalledWith(10);
      });
    });

    describe('if one of the values do NOT satisfy every condition', () => {
      beforeEach(() => {
        aValidator.test
          .mockReturnValue(false);
      });

      it('should return a "is not valid" result, with the name of the failing validation', () => {
        let validationResult = validateMapOfValues(
          { a: 12, b: 10 },
          {
            a: [ aValidator, aSecondValidator ],
            b: [ aValidator ]
          }
        );

        expect(validationResult).toEqual({
          isValid: false,
          propsValidations: {
            a: {
              isValid: false,
              failingValidator: 'ruleA'
            },
            b: {
              isValid: false,
              failingValidator: 'ruleA'
            }
          }
        });
      });
    });
  });
});

