
const validate = require('../validate');

describe('Validate controller', () => {
  describe('when provided a value and a validation descriptor', () => {
    describe('when the descriptor contains value rules', () => {
      it('should validate the value applying the rules', () => {
        let result = validate(12, {
          rules: ['isNumber']
        });

        expect(result).toEqual({
          isValid: true
        })
      });
    });

    describe('when the descriptor contains elements rules', () => {
      describe('and a list of values is provided as the value to validate', () => {
        it('should validate each element in the list of values applying the rules', () => {
          let result = validate([12, 13], {
            elementsRules: ['isNumber']
          });

          expect(result).toEqual({
            isValid: true,
            elementsValidations: [
              { isValid: true },
              { isValid: true }
            ]
          })
        });
      });
    });

    describe('when the descriptor contains properties rules', () => {
      describe('and a map of values is provided as the value to validate', () => {
        it('should validate the map of values applying the rules', () => {
          let result = validate({ a: 12, b: 13 }, {
            propsRules: { a: ['isNumber'], b: ['isNumber'] }
          });

          expect(result).toEqual({
            isValid: true,
            propsValidations: {
              a: { isValid: true },
              b: { isValid: true }
            }
          })
        });
      });
    });
  });

  describe('when the descriptor contains both rules and elements rules', () => {
    describe('and the "rules" validation fails', () => {
      it('should fail the validation without applying the elements validation', () => {
        let result = validate(12, {
          rules: ['isArray'],
          elementsRules: ['isString']
        });

        expect(result).toEqual({
          isValid: false,
          failingValidator: 'isArray'
        });
      });
    });
  });

  describe('when the descriptor contains both rules and props rules', () => {
    describe('and the "rules" validation fails', () => {
      it('should fail the validation without applying the props validation', () => {
        let result = validate(12, {
          rules: ['isArray'],
          propsRules: { a: ['isString'] }
        });

        expect(result).toEqual({
          isValid: false,
          failingValidator: 'isArray'
        });
      });
    });
  });
});

