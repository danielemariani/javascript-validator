
/*
  'isNumber',
  ['isNumber', 'isString'],
  ['isObject', { a: ['isNumber'] }],
  { a: 'isNumber', b: ['isNumber', 'isString'] }


  {
    rules: ['', ''],
    elementsRules: ['', ''],
    propsRules: { a: [''], b: [''] }
  }

  {
    rules: ['', ''],
    elementsRules: {
      rules: ['', '']
    },
    propsRules: {
      a: {
        rules: ['']
      },
      b: {
        rules: [''],
        elementsRules: {
          rules: ['', '']
        }
      },
      c: {
        rules: [],
        propsRules: {
          a: {
            rules: []
          }
        }
      }
    }
  }

*/

function adaptRulesDescriptorToValidationDescriptor(aRulesDescriptor) {
  let adaptedValidator = {};

  if ()
}

function isListOfRules(aRulesDescriptor) {
  return Array.isArray(aRulesDescriptor);
}

function isValidationDescriptor(aRulesDescriptor) {
  return (
    aRulesDescriptor.rules ||
    aRulesDescriptor.propsRules ||
    aRulesDescriptor.elementsRules
  );
}

module.exports = adaptRulesDescriptorToValidationDescriptor;
