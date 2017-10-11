
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
            elements: {
              rules: ['isNumber']
            }
          });

          expect(result).toEqual({
            isValid: true,
            elements: [
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
            props: {
              a: { rules: ['isNumber'] },
              b: { rules: ['isNumber'] }
            }
          });

          expect(result).toEqual({
            isValid: true,
            props: {
              a: { isValid: true },
              b: { isValid: true }
            }
          })
        });
      });
    });
  });

  describe('when the descriptor combines different validations for avalue', () => {
    it('should correctly apply the validations', () => {
      let result = validate({ a: 12, b: [1, 2] }, {
        props: {
          a: { rules: ['isNumber'] },
          b: { elements: { rules: ['isNumber'] }}
        }
      });

      expect(result).toEqual({
        isValid: true,
        props: {
          a: { isValid: true },
          b: {
            isValid: true,
            elements: [
              { isValid: true },
              { isValid: true }
            ]
          }
        }
      });
    });
  });
});

