
function validateValue(aValue, aListOfValidators) {
  let validationResult = {
    isValid: true
  };

  aListOfValidators.every(aValidator => {
    let isValueValid = applyValidatorToValue(
      aValue,
      aValidator
    );

    if (!isValueValid) {
      addFailingInformationToResult(
        validationResult,
        aValidator
      );
    }

    return validationResult.isValid;
  });

  return validationResult;
}

function applyValidatorToValue(aValue, aValidator) {
  return aValidator.test(aValue);
}

function addFailingInformationToResult(aValidationResult, aFailingValidator) {
  aValidationResult.isValid = false;
  aValidationResult.failingValidator = aFailingValidator.name;
}

module.exports = validateValue;

