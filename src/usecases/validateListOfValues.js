
const validateValue = require('./validateValue');

function validateListOfValues(aListOfValues, aListOfValidators) {
  let validationResult = {
    isValid: true,
    elementsValidations: []
  };

  validationResult.elementsValidations = aListOfValues
    .map(
      validateListElement
        .bind(null, aListOfValidators, validationResult)
    );

  return validationResult;
}

function validateListElement(aListOfValidators, aListValidationResult, aListElement) {
  let elementValidation = validateValue(
    aListElement,
    aListOfValidators
  );

  if (!elementValidation.isValid) {
    aListValidationResult.isValid = false;
  }

  return elementValidation;
}

module.exports = validateListOfValues;

