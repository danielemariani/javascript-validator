
const isArray = require('./isArray');
const isString = require('./isString');

function hasMaxLength(aMaxLength, aValue) {
  return (
    isStringOrArray(aValue) &&
    aValue.length <= aMaxLength
  );
}

function isStringOrArray(aValue) {
  return (
    isString(aValue) ||
    isArray(aValue)
  );
}

module.exports = hasMaxLength;
