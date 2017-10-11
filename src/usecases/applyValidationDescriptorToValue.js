
const isDefined = require('../rules/isDefined');
const validateValue = require('./validateValue');
const adaptRuleToValidator = require('../adapters/adaptRuleToValidator');

function applyValidationDescriptorToValue(aValue, aValidationDescriptor) {
  if (
    isDefined(aValidationDescriptor.isRequired) &&
    !(aValidationDescriptor.isRequired)
  ) {
    if (!isDefined(aValue)) {
      return mergeValidationResults();
    }
  }

  return mergeValidationResults(
    applyRulesToValue(aValue, aValidationDescriptor),
    applyElementsRulesToValue(aValue, aValidationDescriptor),
    applyPropsRulesToValue(aValue, aValidationDescriptor)
  );
}

function applyRulesToValue(aValue, aValidationDescriptor) {
  let aListOfRules = aValidationDescriptor
    .rules;

  if (!aListOfRules) {
    return;
  }

  return validateValue(
    aValue,
    aListOfRules.map(adaptRuleToValidator)
  );
}

function applyElementsRulesToValue(aValue, aValidationDescriptor) {
  let elementsRules = aValidationDescriptor.elements;

  if (!elementsRules) {
    return;
  }

  let elementsValidation = {
    isValid: true,
    elements: []
  };

  elementsValidation.elements = aValue
    .map(applyValidationAndRegisterResult
      .bind(null, elementsValidation, elementsRules)
    );

  return elementsValidation;
}

function applyPropsRulesToValue(aValue, aValidationDescriptor) {
  let propsRules = aValidationDescriptor.props;

  if (!propsRules) {
    return;
  }

  let propsValidation = {
    isValid: true,
    props: []
  };

  propsValidation.props = Object.keys(propsRules)
    .reduce((targetObject, aKey) => {
      targetObject[aKey] = applyValidationAndRegisterResult(
        propsValidation,
        propsRules[aKey],
        aValue[aKey]
      );

      return targetObject;
    }, {});

  return propsValidation;
}

function applyValidationAndRegisterResult(
  aValidationResult,
  aListOfRules,
  aValue
) {

  let valueValidationResult = applyValidationDescriptorToValue(
    aValue,
    aListOfRules
  );

  if (!valueValidationResult.isValid) {
    aValidationResult.isValid = false;
  }

  return valueValidationResult;
}

function mergeValidationResults(
  valueValidation = { isValid: true },
  elementsValidation = { isValid: true },
  propsValidation = { isValid: true }
) {

  let validationResult = {
    isValid: true
  };

  Object.assign(
    validationResult,
    valueValidation,
    elementsValidation,
    propsValidation
  );

  if (
    !(valueValidation.isValid) ||
    !(elementsValidation.isValid) ||
    !(propsValidation.isValid)
  ) {
    validationResult.isValid = false;
  }

  return validationResult;
}

module.exports = applyValidationDescriptorToValue;

