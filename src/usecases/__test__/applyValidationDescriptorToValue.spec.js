
const applyValidationDescriptorToValue = require('../applyValidationDescriptorToValue');

describe('applyValidationDescriptorToValue', () => {
  describe('when provided a value and a validation descriptor', () => {
    describe('and the descriptor contains value "rules"', () => {
      it('should apply the rules to the value', () => {
        let result = applyValidationDescriptorToValue(12, {
          rules: ['isNumber']
        });

        expect(result).toEqual({
          isValid: true
        });
      });
    });

    describe('and the descriptor contains props "rules"', () => {
      it('should apply the rules to the value props', () => {
        let result = applyValidationDescriptorToValue({ a: 10 }, {
          props: {
            a: {
              rules: ['isNumber']
            }
          }
        });

        expect(result).toEqual({
          isValid: true,
          props: {
            a: {
              isValid: true
            }
          }
        });
      });

      describe('and NOT every prop is valid', () => {
        it('the validation should fail', () => {
          let result = applyValidationDescriptorToValue({ a: 10, b: 12 }, {
            props: {
              a: {
                rules: ['isString']
              },
              b: {
                rules: ['isNumber']
              }
            }
          });

          expect(result).toEqual({
            isValid: false,
            props: {
              a: { isValid: false, failingValidator: 'isString' },
              b: { isValid: true }
            }
          });
        });
      });
    });

    describe('and the descriptor contains elements "rules"', () => {
      it('should apply the rules to each value element', () => {
        let result = applyValidationDescriptorToValue([12, 10], {
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
        });
      });

      describe('and NOT every element is valid', () => {
        it('the validation should fail', () => {
          let result = applyValidationDescriptorToValue(['12', 10], {
            elements: {
              rules: ['isNumber']
            }
          });

          expect(result).toEqual({
            isValid: false,
            elements: [
              { isValid: false, failingValidator: 'isNumber' },
              { isValid: true }
            ]
          });
        });
      });
    });

    describe('and the descriptor contains a complex validation', () => {
      it('should be valid if expected', () => {
        let result = applyValidationDescriptorToValue({
          a: 12,
          b: [{ c: '13', d: ['1', '2'] }, { c: '13', d: ['1', '2'] }]
        },
          {
            props: {
              a: { rules: ['isNumber'] },
              b: {
                elements: {
                  props: {
                    c: { rules: ['isString'] },
                    d: { elements: { rules: ['isString'] } }
                  }
                }
              }
            }
          });

          expect(result).toEqual({
            isValid: true,
            props: {
              a: { isValid: true },
              b: {
                isValid: true,
                elements: [
                  {
                    isValid: true,
                    props: {
                      c: { isValid: true },
                      d: {
                        isValid: true,
                        elements: [
                          { isValid: true },
                          { isValid: true }
                        ]
                      }
                    }
                  },
                  {
                    isValid: true,
                    props: {
                      c: { isValid: true },
                      d: {
                        isValid: true,
                        elements: [
                          { isValid: true },
                          { isValid: true }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          });
      });

      describe('should apply the "rules" first, if present', () => {
        describe('and if the rules validation fails', () => {
          it('should not apply elements or props validation', () => {
            let result = applyValidationDescriptorToValue(
              {},
              { rules: ['isArray'], elements: { rules: ['isNumber'] } }
            );

            expect(result).toEqual({
              isValid: false,
              failingValidator: 'isArray'
            });
          });
        });
      });

      it('should NOT be valid if expected and expose the validation errors', () => {
        let result = applyValidationDescriptorToValue({
          a: 12,
          b: [{ c: '13', d: [1, '2'] }, { c: 13, d: ['1', '2'] }]
        },
          {
            props: {
              a: { rules: ['isString'] },
              b: {
                elements: {
                  props: {
                    c: { rules: ['isNumber'] },
                    d: { elements: { rules: ['isString'] } }
                  }
                }
              }
            }
          });

          expect(result).toEqual({
            isValid: false,
            props: {
              a: {
                isValid: false,
                failingValidator: 'isString'
              },
              b: {
                isValid: false,
                elements: [
                  {
                    isValid: false,
                    props: {
                      c: {
                        isValid: false,
                        failingValidator: 'isNumber'
                      },
                      d: {
                        isValid: false,
                        elements: [
                          {
                            isValid: false,
                            failingValidator: 'isString'
                          },
                          { isValid: true }
                        ]
                      }
                    }
                  },
                  {
                    isValid: true,
                    props: {
                      c: { isValid: true },
                      d: {
                        isValid: true,
                        elements: [
                          { isValid: true },
                          { isValid: true }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          });
      });
    });

    describe('and the descriptor says that a value is not "required"', () => {
      describe('and a "undefined" value is provided', () => {
        it('should not apply the validation rules and say that the value is valid', () => {
          let result = applyValidationDescriptorToValue({ a: undefined }, {
            props: {
              a: {
                isRequired: false,
                rules: ['isNumber']
              }
            }
          });

          expect(result).toEqual({
            isValid: true,
            props: {
              a: { isValid: true }
            }
          });
        });
      });

      describe('and a "defined" value is provided', () => {
        it('should apply the validation rules', () => {
          let result = applyValidationDescriptorToValue({ a: '12' }, {
            props: {
              a: {
                isRequired: false,
                rules: ['isNumber']
              }
            }
          });

          expect(result).toEqual({
            isValid: false,
            props: {
              a: {
                isValid: false,
                failingValidator: 'isNumber'
              }
            }
          });
        });
      });
    });
  });
});

