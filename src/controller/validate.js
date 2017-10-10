
const rules = require('../rules/');
const validateValue = require('../usecases/validateValue');
const validateMapOfValues = require('../usecases/validateMapOfValues');
const validateListOfValues = require('../usecases/validateListOfValues');

function validate(aValue, aValidationDescriptor) {
  let valueValidation;
  let propsValidation;
  let elementsValidation;

  if (Array.isArray(aValidationDescriptor.rules)) {
    valueValidation = validateValue(
      aValue,
      aValidationDescriptor.rules
        .map(mapRuleToValidator)
    );

    if (!valueValidation.isValid) {
      return composeValidationResult(valueValidation);
    }
  }

  if (Array.isArray(aValidationDescriptor.elementsRules)) {
    elementsValidation = validateListOfValues(
      aValue,
      aValidationDescriptor.elementsRules
        .map(mapRuleToValidator)
    );
  }

  if (aValidationDescriptor.propsRules) {
    propsValidation = validateMapOfValues(
      aValue,
      mapObject(
        aValidationDescriptor.propsRules,
        (aPropValidators) => {
          return aPropValidators.map(
            mapRuleToValidator
          )
        }
      )
    );
  }

  return composeValidationResult(
    valueValidation,
    elementsValidation,
    propsValidation
  );
}

function mapRuleToValidator(aRuleName) {
  let validator = rules[aRuleName];

  if (!validator) {
    throw new Error('No validator');
  }

  return {
    name: aRuleName,
    test: validator
  };
}

function mapObject(aObject, aMapFunction) {
  let targetObject = {};

  Object.keys(aObject).forEach(aKey => {
    targetObject[aKey] = aMapFunction(aObject[aKey]);
  });

  return targetObject;
}

function composeValidationResult(
  valueValidation,
  elementsValidation,
  propsValidation
) {

  return Object.assign(
    { isValid: true },
    valueValidation,
    elementsValidation,
    propsValidation
  );
}

module.exports = validate;

