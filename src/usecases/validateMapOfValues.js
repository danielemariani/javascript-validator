
const validateValue = require('./validateValue');

function validateMapOfValues(aMapOfValues, aMapOfValidators) {
  let validationResult = {
    isValid: true,
    propsValidations: {}
  };

  Object.keys(aMapOfValidators).forEach(aValidatorKey => {
    let propValidation = validationResult.propsValidations[aValidatorKey] = validateValue(
      aMapOfValues[aValidatorKey],
      aMapOfValidators[aValidatorKey]
    );

    if (!propValidation.isValid) {
      validationResult.isValid = false;
    }
  });

  return validationResult;
}

module.exports = validateMapOfValues;

