
const rules = require('../rules/');
const applyValidationDescriptorToValue = require('../usecases/applyValidationDescriptorToValue');

function validate(aValue, aValidationDescriptor) {
  return applyValidationDescriptorToValue(
    aValue,
    aValidationDescriptor
  );
}

module.exports = validate;

